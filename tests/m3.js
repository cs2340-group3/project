var lib = require('./lib');
var assert = require('assert');

describe('M3 functionality', function() {
  lib.setUp();

  // make browser available in closure
  var browser;
  before(function() { browser = this.browser; });

  describe('welcome screen', function() {
    beforeEach(function(done) {
      browser.visit('/', done);
    });

    it.skip('should have options for login and registration', function() {
      browser.assert.link('a', 'Login', '/login');
      browser.assert.link('a', 'Register', '/register');
    });

    it.skip('login should direct to login page', function() {
      return browser.clickLink('Login').then(function() {
        browser.assert.url({ pathname: '/login' });
      });
    });

    it.skip('register should direct to registration page', function() {
      return browser.clickLink('Register').then(function() {
        browser.assert.url({ pathname: '/register' });
      });
    });
  });

  describe('login screen', function() {
    beforeEach(function(done) {
      browser.deleteCookies();
      browser.visit('/login', done);
    });

    it.skip('should display username and password inputs', function() {
      browser.assert.element('form input[name=username]');
      browser.assert.element('form input[name=password]');
    });

    it.skip('should direct to profile with correct info', function() {
      return lib.login(browser)
        .then(function() {
          assert(browser.link('Log out'));
        });
    });

    it.skip('should show error with incorrect info', function() {
      return lib.login(browser, 'user', 'WRONGpass')
        .then(function() {
          browser.assert.url({ pathname: '/login' });
          browser.assert.element('.alert');
        });
    });

    it.skip('should permit cancelling', function() {
      assert(browser.link('Cancel'));
    });
  });

  describe('logout button', function() {
    beforeEach(function() {
      browser.deleteCookies();
      return lib.login(browser);
    });

    it.skip('should work from profile page', function() {
      return browser.visit('/profile')
        .then(function() {
          return browser.clickLink('Log out');
        })
        .then(function() {
          browser.assert.url({ pathname: '/' });
        });
    });

    it.skip('should work from home page', function() {
      return browser.visit('/')
        .then(function() {
          return browser.clickLink('Log out');
        })
        .then(function() {
          browser.assert.url({ pathname: '/' });
        });
    });
  });
});

