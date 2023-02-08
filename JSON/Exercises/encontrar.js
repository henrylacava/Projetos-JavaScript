const dados = require("./clientes.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor))
}

console.log(encontrar(dados,"telefone","5896279799"))