const db = require("../db.json");
const homeController = {
  cadastro: (req, res) => {
    res.render("home/cadastro");
  },
  contato: (req, res) => {
    res.render("home/contato");
  },
  index: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
  servicos: (req, res) => {
    const servico = {
      nome: "Banho e tosa",
      preco: "R$ 50,00",
      descricao: "lorem ipum dolor sit",
    };
    res.render("home/servicos", { servico: servico, title: "Petshop da dh" });
  },
  sobre: (req, res) => {
    res.render("home/sobre");
  },
};

module.exports = homeController;
