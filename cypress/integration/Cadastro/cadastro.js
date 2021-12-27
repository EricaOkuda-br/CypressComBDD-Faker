 ///   <reference  types = "cypress" />


const  Faker = require('faker')

describe(' Cadastro de usuario', () => {
  let usuario
  
  

  before('carregando a URL 1',() => {

    usuario = { email: Faker.internet.email(),
                                  first: Faker.name.firstName(),
                            last:  Faker.name.lastName()
    
    }
                          });
    cy.visit('?controller=authentication&back=my-account')
  })

  it('E-mail usando o faker', () => {
    cy.get('#email_create').type(`${usuario.email}{enter}`)


  })

  it('Preenchendo todos os campos obrigatórios', () => {
    cy.url().should('include','my-account#account-creation')
    cy.get('#email').should('include.value', usuario.email)
    cy.get('#id_gender1').check()
    cy.get('#customer_firstname').type(usuario.name.first)
    cy.get('#customer_lastname').type(usuario.name.last)
    cy.get('#passwd').type(Faker.internet.password())
    cy.get('#address1').type(Faker.address.streetAddress())
    cy.get('#city').type(Faker.address.cityName())
    cy.get('#id_state').select(`${Faker.datatype.number({min:1, max:20})}`)
    cy.get('#postcode').type(`${Faker.datatype.number({min:10000, max:99999})}`)
    cy.get('#phone_mobile').type(Faker.phone.phoneNumberFormat())
  })

it('Clicar em salvar', () => {

  cy.get('#submitAccount').click()
  cy.get('.account > span').should('have.text',`${usuario.name.first} ${usuario.name.last}`)

})



