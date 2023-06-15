## Instruções para executar a aplicação Smart City

Este é um guia para ajudar você a instalar e executar a aplicação. Siga as etapas abaixo:

### 1. Instalar o Node.js

Certifique-se de ter o Node.js instalado em sua máquina. Utilize a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

### 2. Comandos

Abra o terminal e execute os seguintes comandos na raiz do projeto:

```shell
npm install
npm run dev
```

### 3. Acesso

Após executar os comandos acima, a aplicação estará disponível em http://localhost:3000/.
_Acesse essa URL no seu navegador para visualizar a página._

### 4. Print da Página

![Página](src\assets\top-view.jpg)

### 5. Descrição de Clique na Tela e Acionamento do Sensor

Ao clicar na tela, o EventListener obtém a posição do ponteiro e aciona o handleClick, que envia não só as posições de eixo do ponteiro, mas informações pertinentes em requisição para a API `/api/send` em forma de POST.

### 6. Print da Saída no Terminal

![Imagem referente à aplicação rodando e enviando a informação para a API](src\assets\readme-images\app-console.jpg)
![Página](src\assets\readme-images\app-network.jpg)