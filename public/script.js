const loginForm = document.querySelector("#loginForm");
const cadastroForm = document.querySelector("#cadastroForm");
const mensagem = document.querySelector("#mensagem");
const mensagemCadastro = document.querySelector("#mensagemCadastro");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email").value.trim();
    const senha = document.querySelector("#senha").value;

    if (!email || !senha) {
        mensagem.textContent = "Preencha e-mail e senha.";
        return;
    }

    const resposta = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json();
    mensagem.textContent = dados.mensagem;
});

cadastroForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = document.querySelector("#nome").value.trim();
    const email = document.querySelector("#novoEmail").value.trim();
    const senha = document.querySelector("#novaSenha").value;

    if (!nome || !email || !senha) {
        mensagemCadastro.textContent = "Preencha todos os campos.";
        return;
    }

    const resposta = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nome, email, senha })
    });

    const dados = await resposta.json();
    mensagemCadastro.textContent = dados.mensagem;
});
