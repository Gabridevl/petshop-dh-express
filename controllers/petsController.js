const petController = {
  index: (req, res) => {
    res.send("Olá Mundo");
  },
  create: (req, res) => {
    res.send("Cadastro de pet");
  },
  show: (req, res) => {
    res.send("Detalhes do pet: " + req.params.id);
  },
  update: (req, res) => {
    res.send("Atualização de pet: " + req.params.id);
  },
  destroy: (req, res) => {
    res.send("Exclusão de pet: " + req.params.id);
  },
};

module.exports = petController;
