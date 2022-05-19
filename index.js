const express = require('express');
const app = express();
const petsRouter = require('./routes/petsRouter')
const homeRouter = require('./routes/home');


app.set('view engine', 'ejs');
app.use(petsRouter);
app.use(homeRouter);
app.use(express.static('public'));

app.listen(3000, () => console.log("Rodando..."));
