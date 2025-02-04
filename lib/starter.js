/*****************************************************************
 * Create TypeScript Express Starter
 * 2019.12.18 ~ 🎮
 * Made By AGUMON 🦖
 * https://github.com/ljlm0402/typescript-express-starter
 *****************************************************************/

const chalk = require("chalk");
const { exec } = require("child_process");
const editJsonFile = require("edit-json-file");
const { createWriteStream, readdir } = require("fs");
const { writeFile } = require("gitignore");
const inquirer = require("inquirer");
const { ncp } = require("ncp");
const ora = require("ora");
const path = require("path");
const { promisify } = require("util");
const { cp, mkdir } = require("node:fs/promises");
// const figlet = require("figlet");

const readDir = promisify(readdir);
const asyncExec = promisify(exec);
const writeGitignore = promisify(writeFile);
const spinner = ora();

// console.log(
//   chalk.green(
//     figlet.textSync("MTS", {
//       font: "Star Wars",
//       verticalLayout: "controlled smushing",
//     })
//   )
// );

const createProject = async () => {
  let projectName;

  const projectNameArg = process.argv[2];

  if (projectNameArg) {
    projectName = projectNameArg;

    console.log(chalk.green(`Project name: ${projectName}`));
  } else {
    const answer = await inquirer.prompt([
      {
        type: "input",
        name: "projectName",
        message: "What is your project name?",
        validate: (input) => {
          const isValid = /^[a-z0-9-]+$/.test(input.trim());
          return (
            isValid ||
            "Project name can only contain lowercase letters, numbers, and hyphens"
          );
        },
      },
    ]);

    projectName = answer.projectName;
  }

  const { packageManager } = await inquirer.prompt([
    {
      type: "list",
      name: "packageManager",
      message: "Select a Package Manager",
      choices: ["npm", "yarn", "pnpm", "bun"],
      default: "npm",
    },
  ]);

  try {
    const template = await chooseTemplates();

    console.log(`${chalk`{cyan [ 1 / 3 ]} `} 🔍  copying project...`);
    console.log(`${chalk`{cyan [ 2 / 3 ]} `} 🚚  fetching node_modules...`);

    await copyProjectFiles(projectName, template);
    await updatePackageJson(projectName);

    console.log(`${chalk`{cyan [ 3 / 3 ]} `} 🔗  linking node_modules...`);
    console.log(
      "\u001b[2m──────────────────────────────────────────\u001b[22m"
    );

    spinner.start();

    await installNodeModules(projectName, packageManager);

    await postInstallScripts(projectName, template, packageManager);

    await createGitignore(projectName);
    await initGit(projectName);

    await succeedConsole(template);
  } catch (error) {
    await failConsole(error);
  }
};

const getTemplateDir = async () => {
  const contents = await readDir(path.join(__dirname, "../templates"), {
    withFileTypes: true,
  });

  const directories = contents
    .filter((p) => p.isDirectory())
    .map((p) => p.name);

  return directories;
};

const chooseTemplates = async () => {
  const directories = await getTemplateDir();

  const choices = [];

  for (const dir of directories) {
    try {
      const packageJsonPath = path.join(
        __dirname,
        "../templates",
        dir,
        "package.json"
      );
      const packageJson = require(packageJsonPath);
      const description = packageJson.description || "";
      choices.push({ name: `${dir}🔹 ${description}`, value: dir });
    } catch (error) {
      // Handle error if package.json doesn't exist or can't be parsed
      choices.push({ name: dir, value: dir }); // show only name if error
      console.error(
        chalk.yellow(`Warning: Could not read description for template ${dir}.`)
      );
    }
  }

  const { chooseTemplates } = await inquirer.prompt([
    {
      type: "list",
      name: "chooseTemplates",
      message: "Select a template",
      choices: [...directories, new inquirer.Separator()],
    },
  ]);

  return chooseTemplates;
};

const copyProjectFiles = async (projectName, template) => {
  const source = path.join(__dirname, "../templates", template);

  const destination = path.join(process.cwd(), projectName);

  // const options = {
  //   clobber: true,
  //   stopOnErr: true,
  // };

  // ncp.limit = 16;
  // ncp(source, destination, options, function (err) {
  //   if (err) reject(err);
  //   resolve();
  // });

  try {
    await mkdir(destination, { recursive: true });
    await cp(source, destination, { recursive: true });
    return;
  } catch (error) {
    console.error("Error during file copy:", error);
    throw error;
  }
};

const updatePackageJson = async (destination) => {
  const file = editJsonFile(`${destination}/package.json`, { autosave: true });

  file.set("name", path.basename(destination));
};

const checkPackageManagerInstalled = async (packageManager) => {
  try {
    await asyncExec(`${packageManager} --version`);
    return true;
  } catch (error) {
    return false;
  }
};

const installNodeModules = async (destination, packageManager) => {
  spinner.text = `Install node_modules using ${packageManager}...\n`;

  const isPackageManagerInstalled = await checkPackageManagerInstalled(
    packageManager
  );

  if (!isPackageManagerInstalled) {
    spinner.fail(
      chalk.red(
        `\n❌ ${packageManager} is not installed. Please install it and try again.\n`
      )
    );
    process.exit(1);
  }

  let installCommand = "";

  switch (packageManager) {
    case "npm":
      installCommand = "npm install --legacy-peer-deps";
      break;
    case "yarn":
      installCommand = "yarn install";
      break;
    case "pnpm":
      installCommand = "pnpm install";
      break;
    case "bun":
      installCommand = "bun install";
      break;
    default:
      installCommand = "npm install --legacy-peer-deps"; // Fallback to npm
      break;
  }

  await asyncExec(installCommand, { cwd: destination });
};

const getScriptCommand = async (packageManager, scriptName) => {
  let prismaGenerateCommand = "";

  switch (packageManager) {
    case "npm":
      return `npm run ${chalk`{yellow ${scriptName}}`}`;
    case "yarn":
      return `yarn run ${chalk`{yellow ${scriptName}}`}`;
    case "pnpm":
      return `pnpm run ${chalk`{yellow ${scriptName}}`}`;
    case "bun":
      return `bun run ${chalk`{yellow ${scriptName}}`}`;
    default:
      {
        spinner.text = "Run prisma generate...";
        await asyncExec(prismaGenerateCommand, { cwd: destination });
      }
      break;
  }
};

const runScript = async (destination, packageManager, scriptName) => {
  const scriptCommand = getScriptCommand(packageManager, scriptName);
  try {
    await asyncExec(scriptCommand, { cwd: destination });
  } catch (error) {
    spinner.warn(
      chalk.yellow(
        `\n⚠️ Failed to run ${scriptName}, you may need to run it manually. \n`
      )
    );
    console.error(chalk.red(`\n❌ Error: ${error.message}\n`));
  }
};

const postInstallScripts = async (destination, template) => {
  switch (template) {
    case "Chatbot_with_Prisma":
      {
        spinner.text = "Run prisma generate...";
        await asyncExec("npm run prisma:generate", { cwd: destination }); // แก้ไข cwd
      }
      break;
  }
};

const createGitignore = async (destination) => {
  spinner.text = "Create .gitignore...";

  const file = createWriteStream(path.join(destination, ".gitignore"), {
    flags: "a",
  });

  return writeGitignore({
    type: "Node",
    file: file,
  });
};

const initGit = async (destination) => {
  await asyncExec("git init", { cwd: destination });
};

const succeedConsole = async (template) => {
  spinner.succeed(chalk`{green 🎉  Complete setup project}`);

  const msg =
    {
      prisma:
        "⛰ Prisma installed. Check your .env settings and then run `npm run prisma:migrate`",
      knex: "⛰ Knex installed. Check your .env settings and then run `npm run migrate`",
    }[template] || "";

  msg && console.log(msg);
};

const failConsole = async (error) => {
  spinner.fail(
    chalk`{red  ❌ Failed to setup project ⚠️ Please leave this error as an issue}`
  );
  console.error(error);
};

module.exports = createProject;
