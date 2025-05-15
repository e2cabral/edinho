import inquirer from 'inquirer';

const input = async (name, message, defaultAnswer) => {
    const answers = await inquirer.prompt([{
        type: 'input',
        name: name,
        message: message,
        default: defaultAnswer
    }]);
    return answers[name];
}

const list = async (name, message, choices, defaultAnswer) => {
    const answers = await inquirer.prompt([{
        type: 'list',
        name: name,
        message: message,
        choices: choices,
        default: defaultAnswer
    }]);
    return answers[name];
}

export const askProjectName = () => {
    return input('projectName', 'Qual o nome do seu projeto?', 'meu-projeto-lambda');
}

export const askProjectTemplate = () => {
    return list(
        'templateName',
        'Qual o template do seu projeto?',
        ['lambda', 'ecs', 'batch'],
        'lambda'
    );
}

export const askProjectPath = () => {
    return input('projectPath', 'Qual o local do seu projeto?', '.');
}