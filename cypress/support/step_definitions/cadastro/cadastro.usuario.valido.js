                     /// <reference types= "cypress" />

/* global Then, When, Given, And */

const  Faker = require('faker')

let  usuario = { email: Faker.internet.email(),
  name: {
      first: Faker.name.firstName(), 
      last:  Faker.name.lastName()
  }}

  Given ('Estou  navegando na loja', () => {
    cy.visit('?controller=authentication&back=my-account')
  })

  When('Clico para realizar o cadastro no site', () => {
    cy.get('#email_create').type(`${usuario.email}{enter}`)
  })

  And('Informo meu email para o cadastro no site',() =>{
    cy.url().should('include','my-account#account-creation')
    cy.get('#email').should('include.value', usuario.email)
    cy.get('#id_gender1').check()
  })

  And('Prenncho toodos  os dados no site', () => {

    
    cy.get('#customer_firstname').type(usuario.name.first)
    cy.get('#customer_lastname').type(usuario.name.last)
    cy.get('#passwd').type(Faker.internet.password())
    cy.get('#address1').type(Faker.address.streetAddress())
    cy.get('#city').type(Faker.address.cityName())
    cy.get('#id_state').select(`${Faker.datatype.number({min:1, max:20})}`)
    cy.get('#postcode').type(`${Faker.datatype.number({min:10000, max:99999})}`)
    cy.get('#phone_mobile').type(Faker.phone.phoneNumberFormat())
  })

  And('Finalizo o cadastro de usuário', () => {
    cy.get('#submitAccount').click()
  })

  Then('o sistema realiza meu cadastro com sucesso e realizar meu login', () => {
    cy.get('.account > span').should('have.text',`${usuario.name.first} ${usuario.name.last}`)
  })