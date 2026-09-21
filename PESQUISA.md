## 1. O que é teste de software?

Teste de software é o processo de verificar se um sistema está funcionando como deveria, durante o teste, são executadas situações que podem acontecer com o usuário para encontrar erros ou comportamentos inesperados. A finalidade é descobrir problemas antes que eles cheguem ao usuário final.

Os testes também ajudam a verificar se os requisitos do sistema estão sendo atendidos. Eles são importantes porque um software que funciona apenas em uma situação não pode ser considerado confiável. Por exemplo, um login pode funcionar com os dados corretos, mas também precisa tratar senha errada, campos vazios e outros casos.

## 2. Quais são os principais tipos de testes de software?

Existem vários tipos de testes. Alguns dos principais são:

### Teste unitários

Testa uma pequena parte do programa de forma isolada, como uma função.

Exemplo: testar uma função que calcula o valor total de uma compra.

### Teste de integração

Verifica se partes diferentes do sistema conseguem trabalhar juntas.

Exemplo: testar se o formulário de cadastro consegue enviar os dados para a API e se a API consegue processar esses dados.

### Teste de sistema

Testa o sistema como um todo, tentando verificar se o comportamento geral está de acordo com o que foi definido.

Exemplo: abrir a aplicação, preencher o login e verificar se o usuário consegue entrar.

### Teste funcional

Verifica se uma funcionalidade faz aquilo que deveria fazer.

Exemplo: informar e-mail e senha corretos e verificar se o login é realizado.

### Teste não funcional

Verifica características que não estão relacionadas somente à função principal, como desempenho, segurança, acessibilidade e compatibilidade.

Exemplo: verificar se a página continua utilizável em uma tela de celular.

### Teste de regressão

É realizado para verificar se uma alteração feita no sistema não quebrou uma funcionalidade que já funcionava.

Exemplo: depois de alterar o código do login, executar novamente os testes de login válido e login inválido.

### Teste de usabilidade

Verifica se o sistema é fácil de entender e utilizar.

Exemplo: observar se o usuário consegue identificar facilmente onde deve informar o e-mail e a senha.

## 3. O que são testes de unidade, testes de aplicação e testes de sistema?

### Teste de unidade

O teste de unidade verifica uma parte pequena do código, normalmente uma função ou método. Ele é realizado durante o desenvolvimento e ajuda a encontrar problemas em partes específicas.

Neste projeto, por exemplo, podemos considerar como unidade uma regra que verifica se um e-mail é válido.

### Teste de aplicação

O teste de aplicação verifica o comportamento das funcionalidades da aplicação, considerando a comunicação entre as partes necessárias para executar uma função.

Um exemplo seria testar o formulário de login e a rota `/api/login`, verificando se os dados enviados pelo formulário recebem a resposta correta.

### Teste de sistema

O teste de sistema verifica o sistema de maneira mais completa, considerando o funcionamento geral da aplicação.

No projeto, um exemplo seria abrir a página no navegador, preencher os campos, enviar o formulário e conferir a mensagem apresentada para o usuário.

A principal diferença é o nível de análise: o teste de unidade olha uma parte pequena, o teste da aplicação verifica uma funcionalidade funcionando dentro da aplicação e o teste de sistema olha o funcionamento do sistema de forma mais ampla.

## 4. O que são cenários de teste?

Cenário de teste é uma situação que será utilizada para verificar um comportamento do sistema. Ele descreve o que queremos verificar e normalmente possui uma condição inicial, passos, resultado esperado e resultado obtido.

Exemplo de cenário:

- Objetivo: verificar se o login funciona com dados corretos.
- Condição inicial: a aplicação está funcionando e existe um usuário cadastrado.
- Passos: abrir a página, informar o e-mail correto, informar a senha correta e clicar em entrar.
- Resultado esperado: o sistema deve informar que o login foi realizado com sucesso.

Esse tipo de cenário ajuda a deixar o teste organizado e facilita saber exatamente o que foi verificado.

## 5. Qual é a diferença entre requisitos funcionais e não funcionais?

Requisitos funcionais descrevem o que o sistema deve fazer.

Exemplos em um sistema web:

1. O sistema deve permitir que o usuário faça login usando e-mail e senha.
2. O sistema deve permitir o cadastro de um novo usuário.

Requisitos não funcionais descrevem características ou condições de funcionamento do sistema.

Exemplos:

1. A página deve funcionar em computadores e celulares.
2. Os campos do formulário devem ser acessíveis e fáceis de utilizar.

Outro exemplo de requisito não funcional seria o tempo de resposta de uma página. Nesse caso, não estamos dizendo qual função o sistema deve executar, mas uma característica relacionada ao seu funcionamento.

## 6. O que é um plano de teste?

Um plano de teste é um documento que organiza como os testes de um software serão realizados. Ele ajuda a definir o que será testado, como será testado e quais resultados devem ser considerados.

Alguns elementos que podem fazer parte de um plano de teste são:

- objetivo dos testes;
- funcionalidades que serão testadas;
- requisitos envolvidos;
- ambiente de teste;
- ferramentas utilizadas;
- cenários e casos de teste;
- dados necessários para os testes;
- resultados esperados;
- critérios para aprovação ou reprovação;
- responsáveis pelos testes;
- prazos;
- registro dos problemas encontrados.

No caso deste projeto, o Jest e o Supertest foram utilizados para automatizar alguns testes da aplicação.

## 7. Como os testes podem contribuir para a qualidade de um sistema web no client-side?

Os testes no client-side ajudam a verificar a parte da aplicação que o usuário acessa diretamente no navegador.

Na interface, podemos verificar se os elementos aparecem corretamente, se os botões funcionam e se o conteúdo está organizado.

Na usabilidade, podemos verificar se o usuário consegue entender os campos e realizar as tarefas sem dificuldade.

Nos formulários, podemos testar campos obrigatórios, formatos de e-mail, tamanho de senha e mensagens de erro.

No JavaScript, podemos verificar se as validações e eventos estão funcionando e se um erro no código não impede o uso da página.

Na compatibilidade, podemos testar diferentes navegadores e tamanhos de tela.

No desempenho, podemos observar se a página carrega rapidamente e se scripts ou recursos muito pesados estão prejudicando a experiência.

Na acessibilidade, podemos verificar coisas como uso de teclado, identificação dos campos, textos alternativos quando necessários e contraste.

Tudo isso ajuda a reduzir problemas que o usuário poderia encontrar depois que o sistema fosse publicado.

## 8. Questão-desafio — 5 cenários de teste

Os cinco cenários abaixo foram transformados em testes automatizados no arquivo `tests/app.test.js`.

### Cenário 1 — Login com dados corretos

Objetivo do teste: verificar se um usuário cadastrado consegue entrar no sistema.

Condição inicial: a aplicação está funcionando e existe um usuário com e-mail `carl@teste.com` e senha `123456`.

Passos para execução:
1. Enviar uma requisição de login.
2. Informar o e-mail correto.
3. Informar a senha correta.
4. Verificar a resposta da aplicação.

Resultado esperado: o sistema deve retornar sucesso e informar que o login foi realizado.

Resultado obtido: o teste retornou status 200 e sucesso.

Situação: Aprovado.

### Cenário 2 — Login com senha incorreta

Objetivo do teste: verificar se o sistema impede o login quando a senha está errada.

Condição inicial: existe um usuário cadastrado.

Passos para execução:
1. Informar o e-mail correto.
2. Informar uma senha incorreta.
3. Enviar a requisição.

Resultado esperado: o sistema deve negar o acesso e informar que os dados estão incorretos.

Resultado obtido: o sistema retornou status 401 e não permitiu o login.

Situação: Aprovado.

### Cenário 3 — Login com campos vazios

Objetivo do teste: verificar se o sistema impede o envio de um login sem os dados necessários.

Condição inicial: página ou API de login disponível.

Passos para execução:
1. Não informar e-mail.
2. Não informar senha.
3. Enviar a requisição.

Resultado esperado: o sistema deve informar que e-mail e senha precisam ser preenchidos.

Resultado obtido: o sistema retornou status 400 e apresentou a mensagem esperada.

Situação: Aprovado.

### Cenário 4 — Cadastro com dados válidos

Objetivo do teste: verificar se um novo usuário consegue ser cadastrado.

Condição inicial: aplicação funcionando e e-mail ainda não utilizado.

Passos para execução:
1. Informar nome.
2. Informar um e-mail válido.
3. Informar uma senha com pelo menos seis caracteres.
4. Enviar o cadastro.

Resultado esperado: o sistema deve criar o usuário e retornar uma mensagem de sucesso.

Resultado obtido: o sistema retornou status 201 e confirmou o cadastro.

Situação: Aprovado.

### Cenário 5 — Cadastro com e-mail inválido

Objetivo do teste: verificar se o sistema rejeita um cadastro com e-mail fora do formato esperado.

Condição inicial: aplicação funcionando.

Passos para execução:
1. Informar um nome.
2. Informar `email-invalido` como e-mail.
3. Informar uma senha válida.
4. Enviar o cadastro.

Resultado esperado: o sistema deve rejeitar o cadastro e informar que o e-mail é inválido.

Resultado obtido: o sistema retornou status 400 e apresentou a mensagem esperada.

Situação: Aprovado.