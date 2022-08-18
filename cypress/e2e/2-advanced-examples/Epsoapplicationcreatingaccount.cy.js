///<reference types = "Cypress"/>
describe("My EpsoapplicationcreationTest Suite", function(){
    it("My EpsoapplicationcreationTest case", function(){
        cy.visit("https://europa.eu/epso/application/passport/login.cfm?islo=true")
        cy.get('.ea_ignore').click()
        cy.get('.cck-actions > .wt-link').click()
        cy.contains('Create your EPSO Account').click()
        cy.get('span.text').click()
        cy.get('#f_login').type('Abijith')
        cy.get('#f_pass_a').type('jana12345@$')
        cy.get('#f_pass_b').type('jana12345@$')
        cy.wait(15000)
        cy.get('#field_cname').type('Sivanandham')
        cy.get('#field_lname').type('Perfect')
        cy.get('#field_fname').type('Jana')
        cy.get('#field_rse_code_M').click()
        cy.get('input[name="field_birthdate"]').type('20/10/1996')
        cy.get('select[name="field_lang_id"]').select('English')
        cy.get('select[name="field_citizenship"]').select('French')
        cy.get('#field_citizenship_2').select('Dutch')
        cy.get('input[name="field_street"]').type('No.1, 6th cross, Tagore Nagar, Lawspet')
        cy.get('#field_locality').type('Puducherry')
        cy.get('input[name="field_postcode"]').type('605008')
        cy.get('select[name="field_rpa_id"]').select('France')
        cy.get('#field_email').type('janathanan996@gmail.com')
        cy.get('input[name="field_email_validate"]').type('janathanan996@gmail.com')
        cy.get('input[name="field_phone"]').type('0442255382')
        cy.get('#field_gsm').type('9003943754')
        cy.get('input[name="field_fax"]').type('04132224874')
        cy.get('button[type="submit"]').click()
    })
})