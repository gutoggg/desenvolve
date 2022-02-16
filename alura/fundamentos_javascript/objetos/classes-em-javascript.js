// Embora o que foi visto no código cliente-poupança.js seja também um conceito de programação orientada a objeto
// Os comandos utilizados eram praticados até a implementação do ES2015, quando então a criação de classes foi implementada
// a partir do uso da palavra reservada class.

// Cria a classe conta poupança
class contaPoupanca {
    constructor (nome, cpf, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.saldo = saldo;
        this.depositar = function(valor) {
            this.saldo += valor
        }
        this.sacar = function(valor) {
            if (valor > this.saldo) {
                console.log(`Saque negado. Conta possui apenas R$${this.saldo} em saldo.`)
            } else {
                this.saldo -= valor
                console.log(`Saque efetuado. Conta possui agora R$${this.saldo} em saldo.`)
            }

        }
        

        console.log(`Conta criada em nome de ${this.nome} com saldo inicial de R$${this.saldo}.`);
    }
}

// Extende a conta poupança para criação da conta com um dependente
class contaComDependente extends contaPoupanca{
    constructor(nomeTitular, cpfTitular, nomeDependente, cpfDependente, saldo){
        super(nomeTitular, cpfTitular, saldo);
        this.nomeDependente = nomeDependente;
        this.cpfDependente = cpfDependente
    }
}

//Cria agora duas contas. Uma poupança e uma com um dependente.
const contaPoup1 = new contaPoupanca("Jorge", 1234, 150);
const conta2 = new contaPoupanca("Carlos", 32565, 1000000)
const contaComJessica = new contaComDependente("Jorge", 1234, "Jessica", 4321, 250);

// E agora utiliza o método herdado da contaPou
contaComJessica.sacar(300);