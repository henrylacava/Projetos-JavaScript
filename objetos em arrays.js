const clienteEnderecos = [
    {
        rua: 'Av. 9 de Julho',
        numero: 10,
        apartamento: true,
    },
    {
        rua: 'Avenida Paulista',
        numero: 20,
        apartamento: false
    },
]
clienteEnderecos.push({
    rua: 'R. Vinte e Quatro de Dezembro',
    numero: 200,
    apartamento: true
})
const somenteApartamento = clienteEnderecos.filter((endereco, indice) =>{
    return endereco.apartamento === true
})
console.log(somenteApartamento)
