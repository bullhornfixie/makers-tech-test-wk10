'use strict';

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }
};

BankAccount.prototype.deposit = function(amount) {
  var update = this.balance += amount
  this.history.push([`${this.getDateToday()} || ${amount} || 'nil' || ${update}\n`])
}

BankAccount.prototype.withdraw = function(amount) {
  var update = this.balance -= amount
  this.history.push([`${this.getDateToday()} || 'nil' || ${amount} || ${update}\n`])
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
  var header = 'date       || credit || debit || balance'
  var arr = this.history.reverse()
  console.log(header + '\n' + arr.join(''))
}


