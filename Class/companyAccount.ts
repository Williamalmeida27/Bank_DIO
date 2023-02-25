import { Account } from "./account"

export class companyAccount extends Account{

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    getLoan = (valueLoan: number): void => {
        console.log("Informe o valor que deseja pegar no emprestimo?")

        if (this.validateStatus()) {
            let upd = this.setBalance(valueLoan)
            
            console.log("Você pegou de emprestimo R$ ", valueLoan," Saldo atual é R$ ", upd )
        }
    }

    deposit = (val: number): number =>{
         //Mudamos a assinatura para number e o fluxo do metódo. //Void é que nao tem retorno
        return val

    } //Polimorfismo é essa alteração de um metódo da classe mae/pai podendo ter uma mudança até de retorno e assinatura:

}