'use strict';

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }
};

BankAccount.prototype.deposit = function(amount) {
  var update = this.balance += amount
  this.history.push([this.getDateToday(), 'credit', amount, 'balance', update])
}

BankAccount.prototype.withdraw = function(amount) {
  var update = this.balance -= amount
  this.history.push([this.getDateToday(), 'debit', amount, 'balance', update])
}

BankAccount.prototype.getDateToday = function () {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear();

  today = dd + '/' + mm + '/' + yyyy;
  return today
}

BankAccount.prototype.statement = function () {
  console.log(this.history.reverse())
}

