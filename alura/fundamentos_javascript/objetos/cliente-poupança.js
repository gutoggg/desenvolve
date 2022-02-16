// Declara o construtor de cliente
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

//  Utilizando o construtor de Cliente através do método call(), cria agora o construtor para ClientePoupanca.
function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this,nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
}

// Cria cliente antes de inserir a função depositarPoup
const clientePoup1 = new ClientePoupanca("jorge", 123, "guto@TextDecoderStream.com", 1000, 0);

// Adiciona a todas as instancias de ClientePoupanca a função depositarPoup, independente se foram criadas antes ou depois
// dessa modificação. Isto modifica o prototype, logo, modifica todas as instancias que o tenham.
ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}
// Cria cliente depois de inserir a função depositarPoup
const clientePoup2 = new ClientePoupanca("jorge", 123, "guto@TextDecoderStream.com", 1000, 0);

// Mesmo criando antes, o clientePoup1 possui o metodo depositarPoup
clientePoup1.depositarPoup(22)
clientePoup2.depositarPoup(20)

// Refletindo assim a execução do método no estado de ambas as instancias de ClientePoup
console.log(clientePoup1);
console.log(clientePoup2);