# Banco Web - Testes Automatizados

Repositório de testes automatizados para aplicação bancária desenvolvida com Cypress e JavaScript.

## Objetivo do Projeto

Este projeto contém testes automatizados para a aplicação web bancária, desenvolvidos com Cypress para garantir a qualidade, confiabilidade e estabilidade dos fluxos críticos da aplicação. Os testes cobrem funcionalidades como login de usuário, realização de transferências bancárias e listagem de transferências.

## Automatização com Cypress

Cypress é uma ferramenta de teste de front-end de próxima geração, criada para tornar o processo de testar mais rápido, fácil e confiável. Utilizamos Cypress para:

- Testes de ponta a ponta (E2E) que simulam o comportamento real do usuário
- Integração contínua com relatórios de execução
- Validação de interfaces web de forma ágil
- Automação de fluxos críticos de negócios

## Instalação

### Pré-requisitos

- Node.js (v16 ou superior)
- npm ou yarn
- Aplicação web [banco-web](https://github.com/GeisonQA/Banco-web) rodando na porta 4000
- API [banco-api](https://github.com/GeisonQA/banco-api) rodando na porta 3000

### Passos para Instalação

1. Clone este repositório:
   ```bash
   git clone https://github.com/GeisonQA/banco_web-testes.git
   cd banco_web-testes
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Certifique-se de que as aplicações [banco-api](https://github.com/GeisonQA/banco-api) e [banco-web](https://github.com/GeisonQA/Banco-web) estão em execução.

### Execução dos Testes

Após garantir que as aplicações estejam rodando, você pode executar os testes:

#### Executar todos os testes em modo headless:
```bash
npm run test
```

#### Executar testes em modo interativo (com interface gráfica):
```bash
npm run cy:open
```

#### Executar testes em modo headless com interface:
```bash
npm run cy:headed
```

## Documentação dos Testes

### Testes Implementados

1. **Login do Usuário** (`cypress/e2e/login.cy.js`)
   - Testa o login com credenciais válidas
   - Testa o login com credenciais inválidas
   - Verifica mensagens de erro apropriadas

2. **Transferência Bancária** (`cypress/e2e/transferencia.cy.js`)
   - Realiza transferência com dados válidos
   - Testa transferência com valor abaixo do permitido (menor que R$10,00)
   - Testa transferências acima de R$5.000,00 (exige autenticação)
   - Valida token de autenticação

3. **Lista de Transferências** (`cypress/e2e/listaTransferencia.cy.js`)
   - Testa navegação entre páginas de transferências
   - Verifica exibição correta das transferências

### Estrutura de Pastas

```
cypress/
├── e2e/                    # Arquivos de teste
│   ├── features/           # Arquivos de feature (BDD)
│   ├── login.cy.js        # Testes de login
│   ├── transferencia.cy.js # Testes de transferência
│   └── listaTransferencia.cy.js # Testes de listagem
├── fixtures/              # Dados de teste
│   └── credenciais.json   # Credenciais sensíveis
├── support/               # Comandos personalizados
│   ├── commandos/
│   │   ├── common.js      # Comandos comuns
│   │   ├── login.js       # Comandos específicos de login
│   │   └── transferencia.js # Comandos específicos de transferência
│   └── commands.js        # Importação de comandos
└── reports/               # Relatórios de testes (gerados automaticamente)
```

## Custom Commands

Para manter os testes organizados e facilitar a manutenção, foram implementados comandos personalizados:

### Comandos Comuns (`cypress/support/commandos/common.js`)

- `cy.verificarMensagemToast(mensagem)`: Verifica se uma mensagem específica é exibida em um toast
- `cy.selecionarOpcaoDeTranferencia(opcao, cliente)`: Seleciona uma opção de transferência para origem ou destino
- `cy.validarTransferencia()`: Valida se a transferência foi realizada com sucesso

### Comandos de Login (`cypress/support/commandos/login.js`)

- `cy.fazerLoginComCredenciaisValidas()`: Realiza login com credenciais válidas do fixture
- `cy.fazerLoginComCredenciaisInvalidas()`: Realiza login com credenciais inválidas do fixture

### Comandos de Transferência (`cypress/support/commandos/transferencia.js`)

- `cy.realizarTransferencia(contaOrigem, contaDestino, valor)`: Realiza uma transferência entre contas
- `cy.validarToken(token)`: Insere o token de autenticação para transferências acima de R$5.000,00
- `cy.clicarProximaPagina(pagina1, pagina2)`: Navega para a próxima página na listagem
- `cy.clicarPaginaAnterior(pagina1, pagina2)`: Navega para a página anterior na listagem
- `cy.validarPaginas(pagina1, pagina2)`: Valida a exibição correta das páginas na listagem

## Organização dos Dados Sensíveis

Os dados sensíveis, como credenciais de acesso, são armazenados em arquivos de fixture:

- `cypress/fixtures/credenciais.json`: Contém credenciais para testes válidos e inválidos

Esses dados são carregados dinamicamente nos testes usando `cy.fixture()`.

## Relatórios de Teste

O projeto utiliza o `cypress-mochawesome-reporter` para gerar relatórios HTML detalhados após cada execução de testes:

```javascript
// Configuração no cypress.config.js
reporter: 'cypress-mochawesome-reporter',
setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on)
}
```

Após a execução dos testes, os relatórios HTML estarão disponíveis na pasta `cypress/reports/`.

## Execução em Ambientes CI/CD

A configuração atual permite integração contínua com suporte a:

- Execução headless de testes
- Geração de relatórios em formato HTML
- Screenshots automáticas em caso de falhas
- Vídeos de execução (desabilitados atualmente para otimização)

## Contribuição

1. Faça o fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Adicione seus testes
4. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
5. Push para a branch (`git push origin feature/nova-feature`)
6. Abra um Pull Request

## Links Importantes

- [API Banco](https://github.com/GeisonQA/banco-api)
- [Web Banco](https://github.com/GeisonQA/Banco-web)

## Licença

Este projeto está licenciado sob a licença ISC.