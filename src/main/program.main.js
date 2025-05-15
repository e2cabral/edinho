import {program} from "commander";

const options = program
    .version('1.0.0')
    .description('CLI para criar projetos Lambda a partir de templates')
    .option('-t, --template <tipo>', 'tipo de template (lambda, ecs, batch)')
    .option('-d, --destination <caminho>', 'caminho para destino do projeto')
    .option('-n, --name <nome>', 'nome do projeto')
    .parse(process.argv)
    .opts();

export default options;