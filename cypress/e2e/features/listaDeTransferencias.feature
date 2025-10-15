Funcionalidade: Visualizar histórico de transferências
  Como um usuário logado
  Quero visualizar minhas transferências realizadas
  Para acompanhar o histórico das movimentações

  Cenário: Exibir lista inicial de transferências
    Dado que o usuário está logado no sistema
    Quando ele acessa a tela de transferências
    Então o sistema deve exibir uma lista com as transferências realizadas
    E deve exibir a página atual como "1"

  Cenário: Avançar para a próxima página
    Dado que o usuário possui 05 transferências registradas
    Quando ele clica no botão "Próxima Página"
    Então o sistema deve exibir a próxima página de transferências

  Cenário: Retornar à página anterior
    Dado que o usuário está visualizando a página "2" de transferências
    Quando ele clica no botão "Página Anterior"
    Então o sistema deve exibir a página "1"
