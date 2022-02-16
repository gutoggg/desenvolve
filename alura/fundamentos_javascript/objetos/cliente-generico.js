function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    }
}

const clienteTeste = new Cliente("jorge", 123, "guto@TextDecoderStream.com", 1000);

clienteTeste.depositar(60);

console.log(clienteTeste);