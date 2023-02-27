//Para importar é necessário que nas classes tenha o export antes e aqui inserir o import.
import { companyAccount } from "./Class/companyAccount";
import { normalAccount } from "./Class/normalAccount";
import { peopleAccount } from "./Class/peopleAccount"; 

//Class acount
//name, accountNumber
//depositar, sacar
//Dio Banking - Projeto


//Teste de instacia do peopleAccount

const Newaccount: peopleAccount = new peopleAccount(1, 'William', 1); //Criando um novo objeto com a tipagem de accoutn e criando um novo através da setagem construtor
Newaccount.deposit(500);
console.log(Newaccount);
Newaccount.withdraw(255);
console.log(Newaccount);


//Teste de instacia do companyAccount

const accountDio: companyAccount = new companyAccount('CIA', 1); //Criando um novo objeto com a tipagem de accoutn e criando um novo através da setagem construtor
accountDio.deposit(10);
console.log(accountDio);
// accountDio.set("Will"); //Usando o set criado com private, porém está apenas readonly.
accountDio.getLoan(500);
console.log(accountDio);


//Teste de instacia do normalAccount
const normalaccount: normalAccount = new normalAccount('Normal', 1); //Criando um novo objeto com a tipagem de accoutn e criando um novo através da setagem construtor
console.log(normalaccount);
normalaccount.deposit(250);
console.log(normalaccount);



