'use strict'

describe('Bank Account Test Suite', function() {
  let cleverloot;

  beforeEach(function() { cleverloot = new BankAccount();
  });

  it('account holder has a balance of 0 when opening a new account', function() {
    expect(cleverloot.balance).toEqual(0);
  });

});