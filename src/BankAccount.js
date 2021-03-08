'use strict';

class BankAccount {
  constructor() {
    this.balance = 0;
  }
};

BankAccount.prototype.deposit = function(amount) {
  this.balance += amount
}

BankAccount.prototype.withdraw = function(amount) {
  this.balance -= amount
}


