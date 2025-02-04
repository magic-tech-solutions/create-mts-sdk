declare module 'write-gitignore' {
  function writeGitignore(options?: { path?: string }): void;
  export = writeGitignore;
}
