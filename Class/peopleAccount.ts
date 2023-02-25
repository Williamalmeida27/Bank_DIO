import { Account } from "./account"

export class peopleAccount extends Account{ //Nesta estamos herdando tudo da classe abstrata e adicionando novas inf
    doc_id: number

    constructor(doc_id: number, name: string, accountNumber: number){
        super(name, accountNumber)
        this.doc_id = doc_id
    } //Assim ao vez de chama a classe abst para criar o molde, usaremos essa classe para criar.
}