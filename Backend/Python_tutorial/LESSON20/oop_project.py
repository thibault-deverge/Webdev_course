from bank_accounts import *

# Open account
Dave = BankAccount(1000, 'Dave')
Sara = BankAccount(2000, 'Sara')

# Check balance
Dave.getBalance()
Sara.getBalance()

# Make deposit
Sara.deposit(500)

# Withdraw impossible and possible
# Dave.withdraw(10000)
Dave.withdraw(100)

# Transfert of money
# Dave.transfert(10000, Sara)
Dave.transfert(100, Sara)

# Open intereset account
Jim = InterestRewardsAcct(1000, "Jim")
Jim.deposit(100)
Jim.transfert(100, Dave)

# Open saving account
Blaze = SavingsAcct(1000, "Blaze")
Blaze.deposit(100)
Blaze.transfert(500, Sara)