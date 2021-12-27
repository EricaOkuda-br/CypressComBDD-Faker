Feature:  Cadastro Usuario

    Eu como cuonsumidor desejo realizar o cadastro no site para  efetuar  minhas compras

  Scenario: Cadastrar usuario validade
  Given Estou  navegando na loja
  When Clico para realizar o cadastro no site
  And  Informo meu email para o cadastro no site
  And Prenncho toodos  os dados no site
  And Finalizo o cadastro de usuário
  Then  o sistema realiza meu cadastro com sucesso e realizar meu login