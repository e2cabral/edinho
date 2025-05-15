import degit from "degit";
import chalk from "chalk";

const templateRepos = {
    'lambda': 'e2cabral/lambda-starter-template',
    'ecs': 'e2cabral/ecs-starter-template',
    'batch': 'e2cabral/batch-starter-template'
};

export const getEmitter = (repo) => {
    return degit(repo, {
        force: true,
        verbose: true
    });
}

export const clone = async (path, template) => {
    const emitter = getEmitter(templateRepos[template])
    try {
        await emitter.clone(path);
    } catch (error) {
        console.error(chalk.red('Erro ao clonar template:'), error);
        throw error;
    }
}