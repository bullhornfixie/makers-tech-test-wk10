'use strict';

describe('Bank Account Test Suite', function() {
  let cleverloot;

  beforeEach(function() { cleverloot = new BankAccount();
  });

  it('has a balance of 0 when opening a new account', function() {
    expect(cleverloot.balance).toEqual(0);
  });

  it('increases balance by 100 when depositing 100', function() {
   cleverloot.deposit(100)
   expect(cleverloot.balance).toEqual(100);
  });

});