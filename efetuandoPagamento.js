const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
    saldo: 250,
    compra: function(valor){
        if(valor > this.saldo){
            console.log('Não possui saldo')
        }else{
            cliente.saldo -= valor
            console.log(`Compra efetuada, seu saldo agora é de ${this.saldo}`)
        }
    }
};
cliente.compra(250)
cliente.compra(10)