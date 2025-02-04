#!/usr/bin/env node

/*****************************************************************
 * TypeScript Express Starter
 * 2019.12.18 ~ 🎮
 * Made By AGUMON 🦖
 * https://github.com/ljlm0402/typescript-express-starter
 *****************************************************************/

path = require("path");
starter = require("../lib/starter");
const destination = getDest(process.argv[2]);

function getDest(destFolder = "create-mts-sdk") {
  return path.join(process.cwd(), destFolder);
}

starter(destination);