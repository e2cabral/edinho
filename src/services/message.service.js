import chalk from "chalk";

export const info = (message) => {
    console.log(chalk.blue(message));
}

export const warn = (message) => {
    console.log(chalk.yellow(message));
}

export const error = (message) => {
    console.log(chalk.red(message));
}

export const text = (message) => {
    console.log(chalk.white(message));
}

export const success = (message) => {
    console.log(chalk.green(message));
}

export const finishSuccessMessage = (projectPath, projectName, templateType) => {
    success(`\nProjeto ${templateType.toUpperCase()} criado com sucesso em: ${projectPath}`);
    warn('\nPróximos passos:');
    text(`  1. cd ${projectName}`);
    text('  2. npm install');
    text(`  3. npm watch (para desenvolvimento local)`);
}