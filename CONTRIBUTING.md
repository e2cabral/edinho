# Guia de Contribuição

## Bem-vindo!

Obrigado pelo seu interesse em contribuir para o nosso projeto! Este documento fornece diretrizes e passos para contribuir com o projeto.

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos
- Node.js (versão 20.19.2 ou superior)
- npm (gerenciador de pacotes do Node.js)

### Instalação
1. Clone o repositório:
   ```sh
   git clone https://github.com/e2cabral/edinho
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd edinho
   ```

3. Instale as dependências:
   ```sh
   npm install
   ```

## Estrutura do Projeto
Familiarize-se com a estrutura do projeto e as principais dependências:
- commander (v13.1.0): Para criar interfaces de linha de comando
- inquirer (v12.6.1): Para prompts interativos
- degit (v2.8.4): Para clonar e fazer download de repositórios
- fs-extra (v11.3.0): Para operações de sistema de arquivos estendidas
- chalk (v5.4.1): Para estilizar a saída de console
- simple-git (v3.27.0): Para interações com Git

## Fluxo de Trabalho de Desenvolvimento

1. **Crie uma Branch:**
   ```sh
   git checkout -b nome-da-sua-feature
   ```

2. **Faça suas alterações:**
    - Escreva código limpo e legível
    - Adicione comentários quando necessário
    - Siga as convenções existentes de código

3. **Execute testes locais:**
   ```sh
   npm test
   ```

4. **Commit suas alterações:**
   ```sh
   git commit -m "Descrição clara das alterações"
   ```

5. **Envie para o repositório:**
   ```sh
   git push origin nome-da-sua-feature
   ```

6. **Abra um Pull Request (PR):**
    - Descreva claramente o que suas alterações fazem
    - Referencie quaisquer issues relacionadas
    - Aguarde a revisão e feedback

## Diretrizes de Código

- Siga as convenções de código JavaScript moderno
- Use recursos de ES6+ quando apropriado
- Mantenha as funções pequenas e focadas
- Escreva código autoexplicativo

## Relatando Issues

- Verifique se o problema já não foi relatado
- Use o template disponível para criar novas issues
- Inclua passos detalhados para reproduzir o problema
- Mencione seu ambiente (sistema operacional, versão do Node.js)

## Perguntas ou Sugestões

Se você tiver dúvidas ou sugestões, sinta-se à vontade para:
- Abrir uma issue com sua pergunta
- Entrar em contato com os mantenedores

## Agradecemos sua contribuição!

Sua ajuda é valiosa para melhorar este projeto. Juntos podemos torná-lo ainda melhor!