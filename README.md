# Cleverloot

The purpose of this bank script is to print out a statement for a user, given their activity, like a real bank!  
  
### How It Works

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

![Alt text](images/Node-JS-screenshot.png?raw=true)

### Design 

I created a **wireframe** early on as this helps me think about **edge cases**, what other **features** can 
be introduced later on, and how many **pages** are required. 

![Alt text](images/Wireframe.png?raw=true)


