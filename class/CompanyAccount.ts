import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }


  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.balance =+ amount
      console.log(`Você realizou um emprestimo de RS ${amount}. Valor em conta RS ${this.balance}`)
    }
  }
}
