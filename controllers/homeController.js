const homeController = {
    cadastro: (req, res) => {
        res.render('home/cadastro');
    },
    contato: (req, res) => {
        res.render('home/contato');
    },
    index: (req, res) => {
        res.render('home');
    },
    login: (req, res) => {
        res.render('home/login');
    },
    servicos: (req, res) => {
        res.render('home/servicos');
    },
    sobre: (req, res) => {
        res.render('home/sobre');
    }
}

module.exports = homeController