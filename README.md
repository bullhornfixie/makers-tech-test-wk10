# Cleverloot

The purpose of this bank script is to print out a statement for a user, given their activity, like a real bank!  
  
**For Example**

Accont holder makes a deposit of 1000 on 10-01-2021 
And a deposit of 2000 on 13-01-2021  
And a withdrawal of 500 on 14-01-2021
When she prints her bank statement  
Then she would see:  

date       || credit  || debit  || balance  
14/01/2021 ||         || 500.00 || 2500.00  
13/01/2021 || 2000.00 ||        || 3000.00  
10/01/2021 || 1000.00 ||        || 1000.00  

### Running

You can run this in Chrome console, using the functions defined in BankAccount.js. For example:

```
account = new BankAccount();
account.withdraw(10);
account.statement();

=> 'date || credit || debit || balance\n21/10/2019 || || 10.00 || -10.00\n'
```

