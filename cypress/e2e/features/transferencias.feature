Funcionalidade: Realizar transferências entre contas
  Como um usuário logado
  Quero transferir valores entre contas
  Para movimentar meu dinheiro de forma segura

  Cenário: Transferência com valor válido
    Dado que o usuário está logado no sistema
    E seleciona a conta origem "Conta 1"
    E seleciona a conta destino "Conta 2"
    E informa o valor "100"
    Quando ele clica no botão "Transferir"
    Então o sistema deve exibir a mensagem "Transferência realizada com sucesso!"

  Cenário: Transferência com valor menor que R$10,00
    Dado que o usuário está logado no sistema
    E preenche o campo valor com "9.99"
    Quando ele clica no botão "Transferir"
    Então o sistema deve exibir a mensagem "O valor da transferência deve ser maior ou igual a R$10,00."

  Cenário: Transferência acima de R$5.000,00 sem token
    Dado que o usuário está logado no sistema
    E informa o valor "6000"
    E deixa o campo "Token" vazio
    Quando ele clica em "Transferir"
    Então o sistema deve exibir a mensagem "Token obrigatório para valores acima de R$5.000,00."

  Cenário: Transferência com token incorreto
    Dado que o usuário está logado no sistema
    E informa o valor "6000"
    E informa o token "999999"
    Quando ele clica em "Transferir"
    Então o sistema deve exibir a mensagem "Token inválido."

  Cenário: Transferência acima de 5.000,00 com token válido
    Dado que o usuario esta logado no sistema
    E informa o valor "6000"
    E digita o token válido "123456'
    Quando ele clica em "Transferir"
    Então o sistema deve exibir a mensagem "Transferência realizada com sucesso!"