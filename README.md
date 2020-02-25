## Projeto DOE

O número de brasileiros que doam sangue no Brasil é muito pequeno se comparado a alta necessidade dos hospitais.

Pensando em melhorar essa situação a Rocktseat desenvolveu esse website em sua 3º MaratonaDev, onde pude acompanhar o desenvolvimento e aproveitei para adicionar diversos comentários no código para melhor interpretação de outros DEVs, e também para explicar cada tomada de decisão no desenvolvimento dessa aplicação.

Espero que gostem 😊.

## Funcionamento

O funcionamento é muito simples e focado na experiência do usuário na aplicação, pois são poucas as informações que ele precisa enviar e o processo é bem rápido. Basta apenas preencher 3 campos (nome completo, email e tipo sanguíneo).

Assim, o hospital ou instituição responsável pelo site já terá tudo o que precisa desse usuário:

- Nome e email: Para entrar em contato.

- Tipo sanguíneo: Para ver se é necessário esse tipo de sangue no hospital ou instituição.

## Passo a passo dentro do site
### 1º Após entrar no site, o usuário verá uma tela como a da imagem abaixo.

![image](https://github.com/JVictor07/Project-DOE/blob/master/FtSiteDOE1.png)

### 2º Após clicar no botão (Quero ajudar) é somente preencher o formulário que aparecerá.

Obs: Note que nesta foto o formulário já está preenchido com meus dados, e que há uma flecha mostrando que ainda não existe meu nome no campo dos "Últimos doadores".

![image](https://github.com/JVictor07/Project-DOE/blob/master/FtSiteDOE2.png)

### 3º Depois de preenchido, ele clicará no botão (Quero ajudar) de dentro do formulário e seu nome aparecerá automaticamente no campo dos "Últimos doadores" 

![image](https://github.com/JVictor07/Project-DOE/blob/master/FtSiteDOE3.png)

### 4º Prontinho! O usuário já estará cadastro como um doador e seus dados já estarão guardados dentro de um banco de dados. 
![image](https://github.com/JVictor07/Project-DOE/blob/master/ftbancoDOE.png)

## Ferramentas necessárias:

### Linguagens:
- HTML
- CSS
- JavaScript

### Banco de dados:
- PostBird (Versão mais leve do PostgreSQL)

### Servidor :
- Feito em NodeJS, utilizando os pacotes:


1. Init (Para iniciar minha aplicação com o NodeJS) -- npm init -y (esse -y foi usado para que ele não faça perguntas na inicialização)
2. Express (Framework para criar servidores com o NodeJS) -- npm install express
3. Nodemon (para automatizar a inicialização do servidor) -- npm install nodemon
4. Nunjucks (Engine para adicionar variaveis ao HTML) -- npm install nunjucks
5. Pg (para ligar o servidor ao banco de dados) --  npm install pg

