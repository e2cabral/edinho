### Como usar

Instale o pacote globalmente:

```bash
npm install -g ./
```

Utilize via linha de comando:

```bash
edinho --template <tipo> --name <nome> --destination <caminho>
```

Opções disponíveis:

- `--template, -t`: Tipo do template (lambda, ecs, batch)
- `--name, -n`: Nome do projeto
- `--destination, -d`: Caminho de destino do projeto

Exemplos:

```bash
# Criar projeto Lambda 
edinho --template lambda --name meu-projeto -d projetos

# Modo interativo (sem parâmetros)
edinho
```