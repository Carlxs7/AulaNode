const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send("Requisição recebida!");
});

app.get('/home', (req, res) => {
    res.send("Home page");
});

app.get('/me', (req, res) => {
    console.log(req.query);
    res.send(`Meu nome é ${req.query.nome}$ git , Moro em ${req.query.cidade}`);
})

app.listen(1234, () => {
    console.log("Servidor inicado na porta  1234");
});