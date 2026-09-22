const request = require("supertest");
const { app, usuarios } = require("../server");

describe("Testes da aplicação web", () => {
    test("1. Deve permitir login com dados corretos", async () => {
        const resposta = await request(app)
            .post("/api/login")
            .send({
                email: "carl@teste.com",
                senha: "123456"
            });

        expect(resposta.statusCode).toBe(200);
        expect(resposta.body.sucesso).toBe(true);
    });

    test("2. Deve impedir login com senha incorreta", async () => {
        const resposta = await request(app)
            .post("/api/login")
            .send({
                email: "carl@teste.com",
                senha: "senhaerrada"
            });

        expect(resposta.statusCode).toBe(401);
        expect(resposta.body.sucesso).toBe(false);
    });

    test("3. Deve impedir login sem preencher os campos", async () => {
        const resposta = await request(app)
            .post("/api/login")
            .send({
                email: "",
                senha: ""
            });

        expect(resposta.statusCode).toBe(400);
        expect(resposta.body.mensagem).toBe("Informe e-mail e senha.");
    });

    test("4. Deve realizar cadastro com dados válidos", async () => {
        const emailTeste = `aluno${Date.now()}@teste.com`;

        const resposta = await request(app)
            .post("/api/cadastro")
            .send({
                nome: "Aluno Teste",
                email: emailTeste,
                senha: "123456"
            });

        expect(resposta.statusCode).toBe(201);
        expect(resposta.body.sucesso).toBe(true);

        expect(
            usuarios.some((usuario) => usuario.email === emailTeste)
        ).toBe(true);
    });

    test("5. Deve rejeitar cadastro com e-mail inválido", async () => {
        const resposta = await request(app)
            .post("/api/cadastro")
            .send({
                nome: "Aluno Teste",
                email: "email-invalido",
                senha: "123456"
            });

        expect(resposta.statusCode).toBe(400);
        expect(resposta.body.mensagem).toBe("Informe um e-mail válido.");
    });

});
