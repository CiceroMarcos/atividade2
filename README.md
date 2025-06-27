Exercícios JavaScript - Node.js

Este projeto contém uma série de exercícios de JavaScript que podem ser executados diretamente no ambiente Node.js. Os exercícios abordam lógica, manipulação de strings, arrays, objetos, recursão e interação via terminal.

Pré-requisitos

Node.js instalado (versão 12 ou superior)

npm instalado (geralmente já vem junto com o Node.js)

Instalação

Copie ou clone os arquivos do projeto para uma pasta local.

No terminal, navegue até a pasta do projeto e execute:

npm init -y
npm install readline-sync

O pacote readline-sync é necessário para o jogo de adivinhação funcionar no terminal.

Executando os Exercícios

No terminal, execute o arquivo com o comando:

node atividade2.js

Nota: Caso o arquivo tenha outro nome, substitua "atividade2.js" pelo nome correto do arquivo.

Todos os exercícios serão executados e os resultados serão exibidos no console.

Testando o Jogo de Adivinhação

Por padrão, o jogo de adivinhação está comentado no final do arquivo para evitar execução automática.

Para testar o jogo:

Abra o arquivo no editor de sua preferência.

Localize a linha:

// jogoAdivinhacao();

Remova o // do início da linha.

Salve o arquivo.

Execute novamente:

node atividade2.js

O jogo solicitará que você tente adivinhar um número de 1 a 100 no terminal.
