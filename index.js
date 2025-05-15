#!/usr/bin/env node

import options from "./src/main/program.main.js";
import {askProjectName, askProjectPath, askProjectTemplate} from "./src/services/question.service.js";
import {generateProjectPath} from "./src/services/path.service.js";
import {clone} from "./src/services/template.service.js";
import {validateProjectPath, validateTemplate} from "./src/services/validation.service.js";
import {error, finishSuccessMessage, info} from "./src/services/message.service.js";
import {updatePackageJson} from "./src/services/file.service.js";

async function main() {
    try {
        const projectName = options.name || await askProjectName();
        const templateType = options.template || await askProjectTemplate();
        const destination = options.destination || await askProjectPath();

        await validateTemplate(templateType);

        const projectPath = generateProjectPath(destination, projectName);
        await validateProjectPath(projectPath);

        info(`Criando projeto ${templateType}`);

        await clone(projectPath, templateType);
        await updatePackageJson(projectPath, projectName);

        finishSuccessMessage(projectPath, projectName, templateType);
        process.exit(0)
    } catch (err) {
        error('Erro ao criar o projeto: ' + err);
        process.exit(1);
    }
}

main();