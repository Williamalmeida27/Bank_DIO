import { Account } from "./account";

export class normalAccount extends Account{

    constructor(name: string, accountNumber: number){

        super(name, accountNumber)
    }

    deposit = (valueDeposit: number): void => {

        if (this.validateStatus()) {
            let saldo = this.setBalance(valueDeposit + 10)

            console.log(this.get(), " Você depositou R$ ", valueDeposit, "Saldo atual R$ ", saldo)
        }
        
    }


}