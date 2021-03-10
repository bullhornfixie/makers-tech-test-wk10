# Bank Tech Test 

The purpose of this bank script is to print out a statement for a user, given their activity, like a real bank!  
  
### Specification

## Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance Crietria 

* Account holder makes a deposit of 1000 on 10-01-2021 
* And a deposit of 2000 on 13-01-2021  
* And a withdrawal of 500 on 14-01-2021
* When she prints her bank statement  
* Then she would see:  

```
date       || credit  || debit  || balance  
14/01/2021 ||         || 500.00 || 2500.00  
13/01/2021 || 2000.00 ||        || 3000.00  
10/01/2021 || 1000.00 ||        || 1000.00  
```

### Planning 

My approach was a 4 stage development process:

1. Ideation
2. Design 
3. Development 
4. Deployment 

### Ideation 

In architecturing the business logic, my starting point was to define the input and output:

| Input          | Output           |
| ---------------|----------------- |
| Deposit money  | Increase balance |
| Withdraw money | Decrease balance |
| Statement      | Show balance     |

I chose to build the backend with Node.JS with a static web page to **demonstrate** the program in
it's simplest form and enable **interaction** via Chrome Console. I am also less comfortable with 
JavaScript than Ruby and wanted to improve my syntax skills. 

I built a prototype of the program with all the core functionality working and tested. The greatest
challenge was going to be formatting the bank statement to show all the transactions with a header
whilst trying to keep the **code clean**. 

![Alt text](images/Node-JS-screenshot2.png?raw=true)

### Design 

I created a **wireframe** early on as this helps me think about **edge cases**, what other **features** can 
be introduced later on, and how many **pages** are required. 

![Alt text](images/Wireframe.png?raw=true)

### Development 

## User Stories 
I have created these user stories from the above specifications.

```
As a customer who has a bank account,
to keep track of my transactions, 
I want to see the date, credit, debit and balance fields for each transaction.

As a customer who makes bank transactions, 
so I can keep track of my deposits,
I want to see the date and amount of a deposit I make.

As a customer who makes bank transactions, 
so I can keep track of my withdrawals, 
I want to see the date and amount of a withdrawal I make.

As a customer who makes bank transactions, 
so I can keep track of money I can spend, 
I want to see the total balance of my account. 
```

## Edge Cases 
* What happens when the bank account goes below 0? Is there an overdraft limit?
* Is there a maximum top up limit in a single day?

## Challenges 
* TDD on the bank statement which includes various fields 
* Formatting the bank statement columns and creating white space so all columns align 
* Keeping the code clean when incorporating edge cases to methods 
* Learning new JavaScript syntax in the development process 

### Deployment 

You can run this in Chrome console, using the functions defined in BankAccount.js. For example:

```
account = new BankAccount
account.statement()

date       || credit || debit  || balance
10/03/2021 ||        ||        || 0.00
```

```
account.deposit(100)
account.deposit(100)
account.statement()

date       || credit || debit  || balance
10/03/2021 || 100.00 ||        || 200.00
10/03/2021 || 100.00 ||        || 100.00
```

```
account.withdraw(100)
account.statement()

date       || credit || debit  || balance
10/03/2021 ||        || 100.00 || 100.00
10/03/2021 || 100.00 ||        || 200.00
10/03/2021 || 100.00 ||        || 100.00
```





