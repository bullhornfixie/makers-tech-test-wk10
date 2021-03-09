'use strict';

class BankAccount {
  constructor() {
    this.balance = 0;
    this.history = []
  }
};

BankAccount.prototype.deposit = function(amount) {
  var toFloat = amount.toFixed(2)
  var update = this.balance += amount
  this.history.push([`${this.getDateToday()} || ${toFloat} ||  'nil' || ${update.toFixed(2)}\n`])
}

BankAccount.prototype.withdraw = function(amount) {
  var toFloat = amount.toFixed(2)
  var update = this.balance -= amount
  this.history.push([`${this.getDateToday()} ||  'nil' || ${toFloat} || ${update.toFixed(2)}\n`])
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
  var header = 'date       || credit || debit  || balance'
  var arr = this.history.reverse()
  if (arr.length > 0) {
    console.log(header + '\n' + arr.join(''))
  } else {
    this.history.push([`${this.getDateToday()} ||  'nil' ||  'nil' || ${Number(0).toFixed(2)}\n`])
    console.log(header + '\n' + arr.join(''))
  }
}


