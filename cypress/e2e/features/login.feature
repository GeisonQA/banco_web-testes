Funcionalidade: Login do usuário
  Como um usuário do sistema
  Quero acessar minha conta
  Para poder realizar transferências bancárias

  Cenário: Login com credenciais válidas
    Dado que o usuário está na página de login
    Quando ele preenche o campo "Usuário" com "usuario123"
    E preenche o campo "Senha" com "senha123"
    E clica no botão "Entrar"
    Então o sistema deve exibir a seção "Realizar Transferência"

  Cenário: Login com senha incorreta
    Dado que o usuário está na página de login
    Quando ele preenche o campo "Usuário" com "usuario123"
    E preenche o campo "Senha" com "senhaErrada"
    E clica no botão "Entrar"
    Então o sistema deve exibir a mensagem "Usuário ou senha inválidos."

  
