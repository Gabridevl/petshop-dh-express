const express = require('express');
const app = express();
const petsRouter = require('./routes/petsRouter')
const servicosRouter = require('./routes/servicos')
const homeRouter = require('./routes/home');


app.use(homeRouter)
app.use(petsRouter)
app.set('view engine', 'ejs');
app.use(petsRouter);
app.use(express.static('public'));

app.listen(3000, () => console.log("Rodando..."));
