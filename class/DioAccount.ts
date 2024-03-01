export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amount: number): number | void => {
    if(this.validateStatus()){
      this.balance =+ amount
      console.log(`Voce depositou RS ${amount}, Total em Conta .: ${this.balance}`)
      return this.balance;
    }
  }

  withdraw = (amount: number): void => {
    if(this.status = true && this.balance > amount) {
      console.log(this.balance)
      this.balance -= amount
      console.log(`Voce sacou RS ${amount}, Total em Conta .: ${this.balance}`)
    } else {
      console.log(`Impossivel sacar o valor RS ${amount}, você possui em conta ${this.balance}`)
    }
    
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
