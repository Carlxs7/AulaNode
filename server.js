const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Requisição recebida!");
});

app.get('/home', (req, res) => {
    res.send("Home page");
});

app.get('/me', (req, res) => {
    console.log(req.query);
    res.send(`Meu nome é ${req.query.nome}$ git , Moro em ${req.query.cidade}`);
});

app.get('/produtos{/*categoria}{/*produto}', (req, res) => {
    const {categoria, produto} = req.params;

    if(categoria && produto) {
       return res.send(`Pagina do produto ${produto}`);
    }

    if (categoria && !produto) {
        return res.send(`Todos os produtos da categoria ${categoria}`)
    }

    return res.send(`Todos os produtos`);

});

app.post('/login', (req, res) => {
    const {email, password} = req.body;

    if (email === 'email@mail.com' && password === 'senha123') {
        return res.send("Login bem-sucedido!");
    }

    return res.send('Login falhou. Email ou senha incorretos.');

});

app.listen(1234, () => {
    console.log("Servidor inicado na porta  1234");
});