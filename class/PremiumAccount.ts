import { DioAccount } from "./DioAccount"

export class PremiumAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }


  deposit = (amount: number): void => {
    this.balance =+ amount + 10
    console.log(`Você realizou um emprestimo de RS ${amount}. Valor em conta RS ${this.balance}`)
  }
}
