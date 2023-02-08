// .hasOwnProperty() - Ele tem essa propriedade?

const dados = require("./clientes.json")

function filtrarApartamentosSemComplemento(lista){
    return lista.filter((clientes, indice) => {
        return ( clientes.endereco.apartamento === true &&
            !clientes.endereco.hasOwnProperty("complemento"))
    })
}
console.log(filtrarApartamentosSemComplemento(dados))
