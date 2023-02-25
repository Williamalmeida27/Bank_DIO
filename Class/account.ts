export abstract class Account{ //Classes abstratas não podem ser criada uma instancia, isso é usado para delegar que outras classes usem isso
    private readonly name: string; //Usar assinaura private nos permite que o atributo não seja chamado em qualquer local da aplicação, só dnetro do escopo da aplicação.
    private readonly accountNumber: number;
    private balance: number = 250; //Definido atributo e instaciado com valor zero, sem a necessidade do construtor.
    private status: boolean = true;

    //Assinatura readOnly é apenas leitura, isso significa que você não va conseguir setar um dado novo.

    constructor(name: string, accountNumber: number){
        this.name = name,
        this.accountNumber = accountNumber
    }

    setBalance = (balance: number): number => { //Como o atributo name está privado ele só é acessado via este metódo.
       // this.name = name
        //console.log("Nome alterado com sucesso")
        this.balance += balance;
        return this.balance;
    };

    get = (): string =>{
        return this.name
    };

    getBalance =(valor: number): number =>{
        return this.balance
    }

    deposit = (valueDeposit: number): void => {

        if (this.validateStatus()) {

            this.balance += valueDeposit

            console.log(this.name, " Você depositou R$ ", valueDeposit)
        }
        
    }

    withdraw = (valueWithdraw: number): void => {
        
        if (this.validateStatus() && this.balance >= valueWithdraw) {

            this.balance = this.balance - valueWithdraw;

            console.log("O saldo sacado é R$ ",valueWithdraw, "Saldo atual R$", this.balance)
            
        }else{
            console.log("Seu saldo é de R$ ",this.balance)
        }
    }

    public validateStatus = (): boolean =>{
        if (this.status) {
            return this.status
        }

        throw new Error("Conta está desativada");
        
    }
}

/* class Admin extends Account { //Herança na classe admin filha da classe mãe account

    balance: number

    constructor(name: string, accountNumber: number){
        super(name, accountNumber);
        this.balance = 20;
    }

    getBalance = () => {
        console.log(this.balance)
    }
} Porém essa classe não é subjetiva ao nosso projeto, vamos passar os atributos para o account*/


