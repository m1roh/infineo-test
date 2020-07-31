import { getAuthSwitch, getDisksComponent, getLogin, getNavbar } from '../support/app.po';

describe('disk-shop home', () => {
  beforeEach(() => cy.visit('/'));

  it('should display home', () => {
    getNavbar().contains('Infineo Disk Shop');
    getDisksComponent().should('be.visible');
  });
});

describe('disk-shop auth', () => {
  beforeEach(() => cy.visit('/auth'));

  it('should display login component', () => {
    getLogin().should('be.visible');
  });

  it('should be in login mode', () => {
    getLogin().contains('Switch to Register');
  });

  it('should switch to register mode', function() {
    getAuthSwitch().click();
    getLogin().contains('Switch to Login');
  });
});

describe('disk-shop cart', () => {
  beforeEach(() => cy.visit('/cart'));

  it('should display login component if not logged in', function() {
    getLogin().should('be.visible');
  });
});
