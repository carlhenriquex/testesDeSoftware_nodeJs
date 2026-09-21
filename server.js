const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

const usuarios = [
    {
        nome: "Carl",
        email: "carl@teste.com",
        senha: "123456"
    }
];

app.post("/api/login", (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe e-mail e senha."
        });
    }

    const usuario = usuarios.find(
        (item) => item.email === email && item.senha === senha
    );

    if (!usuario) {
        return res.status(401).json({
            sucesso: false,
            mensagem: "E-mail ou senha incorretos."
        });
    }

    return res.status(200).json({
        sucesso: true,
        mensagem: `Bem-vindo, ${usuario.nome}!`
    });
});

app.get("/api/status", (req, res) => {
    res.json({
        sistema: "online"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
}

module.exports = { app, usuarios };
