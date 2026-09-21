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

});
