import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PremiumAccount } from './class/PremiumAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit(30)
peopleAccount.withdraw(20)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(30)
companyAccount.getLoan(100)
companyAccount.withdraw(220)
console.log(companyAccount)
const premiumAccount : PremiumAccount = new PremiumAccount('Premium', 15)
premiumAccount.deposit(20)
console.log(premiumAccount)