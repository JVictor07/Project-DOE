//CONFIGURANDO O SERVIDOR
const express = require("express")// Aqui ele pede o pacote express, que já está instalado
const server = express() //Aqui ele armazena na variavel a funcionalidade express 


//CONFIGURAR O SERVIDOR PARA APRESENTAR ARQUIVOS ESTÁTICOS
server.use(express.static('public'))//aqui ele entende que nossos arquivos staticos ficaram na pasta 'public', e permite que o servidor a use

// HABILITAR BODY DO FORMULÁRIO
server.use(express.urlencoded({ extended: true }))

//CONFIGURAR A CONEXÃO COM BANCO DE DADOS
const Pool = require('pg').Pool //Deixa minha conexão ativa sem precisar ficar enviando senha para o banco toda hora
const db = new Pool({
    user: 'postgres',
    password: '0001',
    host: 'localhost',
    port: 5432,
    database: 'doe'
})


//CONFIGURANDO A TEMPLATE "ENGINE"
const nunjucks = require("nunjucks") //"nunjucks", é um pacote que permite o uso de variáveis no HTML
nunjucks.configure("./", {
    express: server,
    noCache: true, //Para ele não fazer caches, e deixar atualizar a pagina a partir do nosso arquivo
})




//Logo abaixo, ele usará uma das funcionalidades do express, a função ".get", que necessita que o "/" seja colocado dentro dos seus parametros
//CONFIGURAR A APRESENTAÇÃO DA PÁGINA
server.get("/", function(req, res) { //REQ = requisição, RES = resposta
    
    db.query("SELECT * FROM donors", function(err, result){
        if (err) return res.send("Erro de banco de dados.")

        const donors = result.rows
        return res.render("index.html", { donors })
    })

})//GET - Mostra que o servidor ira "servir" algo

server.post("/", function(req, res){
    //pegar dados do formulário
    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    //Regra de negócios para que não de erros no banco de dados, pois defini que nenhuma das informações ficariam vazias
    if (name == "" || email == "" || blood == "") {
        return res.send("Todos os campos são obrigatórios")
    } //return retorna a função com o que eu coloquei em send("")

    //COLOCO VALORES DENTRO DO BANCO DE DADOS
    const query = `
        INSERT INTO donors ("name","email","blood")
        VALUES ($1, $2, $3)` // Quando eu colo esses valores com "$", eu consigo substitui-los pelos valores dentro da query abaixo
    
    const values = [name, email, blood]

    db.query(query, values, function(err) {
        //fluxo de erro
        if (err) return res.send("erro no banco de dados")

        //fluxo ideal
        return res.redirect("/")
    }) 

})//POST - Serve para "Registrar/guardar" algo 

//LIGA O SERVIDOR E PERMITE ACESSO NA PORTA 3000
server.listen(3000, function() {
    console.log("Iniciei o servidor")// Nos avisa no console que o servidor iniciou
})