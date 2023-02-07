const dados = require("./cliente.json")
const clienteString = JSON.stringify(dados)

console.log(clienteString)

const clienteObject = JSON.parse(clienteString)
console.log(clienteObject)
