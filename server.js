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


app.post("/api/cadastro", (req, res) => {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Preencha todos os campos."
        });
    }

    if (!email.includes("@")) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "Informe um e-mail válido."
        });
    }

    if (senha.length < 6) {
        return res.status(400).json({
            sucesso: false,
            mensagem: "A senha deve ter pelo menos 6 caracteres."
        });
    }

    const existe = usuarios.some((usuario) => usuario.email === email);

    if (existe) {
        return res.status(409).json({
            sucesso: false,
            mensagem: "Este e-mail já está cadastrado."
        });
    }

    usuarios.push({ nome, email, senha });

    return res.status(201).json({
        sucesso: true,
        mensagem: "Cadastro realizado com sucesso."
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
