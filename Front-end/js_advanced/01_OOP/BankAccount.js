class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
        this.accountNumber = accountNumber;
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amt) {
        if (amt > 0) {
            this.balance += amt;
            console.log(`Deposited $${amt}. New Balance: $${this.balance}`)
        } 
        else {
            console.log("Deposit should be a positive number")
        }
    }

    withdraw(amt) {
        if (this.balance >= amt && amt > 0) {
            this.balance -= amt;
            console.log(`Withdrawn $${amt}. New Balance: $${this.balance}`)
        } 
        else if (this.balance < amt) {
            console.log("Insufficient funds")
        }
        else {
            console.log("Withdrawn amount should be positive.")
        }
    }
}