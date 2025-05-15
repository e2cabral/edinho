import chalk from "chalk";
import fs from "fs-extra";

export const validateTemplate = async (templateType) => {
    const validTemplates = ['lambda', 'ecs', 'batch'];

    if (!validTemplates.includes(templateType)) {
        console.log(chalk.red(`Erro: Template "${templateType}" inválido. Templates suportados: ${validTemplates.join(', ')}`));
        process.exit(1);
    }
}

export const validateProjectPath = async (projectPath) => {
    if (fs.existsSync(projectPath)) {
        console.log(chalk.red(`Erro: O diretório ${projectPath} já existe.`));
        process.exit(1);
    }
}