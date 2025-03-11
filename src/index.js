const express = require('express')
const app = express()
app.use(express.json())

// // * ENDPOINT - GET => CLIENTES
// app.get('/clientes', function(request, response) {
//     return response.json({
//         message: 'Listagem de Clientes'
//     })
// })

// * ENDPOINT - GET => CLIENTES
app.get('/clientes', function(request, response) {
    const query = request.query
    console.log(query)
    return response.json({
        message: 'Dados do Cliente com o ID -> 15'
    })
})

// // * ENDPOINT - GET => CLIENTES
// app.get('/clientes/:id/:cpf/:nome/:sobrenome/:pagina', function(request, response) {
//     const params = request.params
//     console.log(params)
//     return response.json({
//         message: 'Dados do Cliente com o ID =>  ' + params.id
//     })
// })

// * ENDPOINT - POST => CADASTRO DE PRODUTO
app.post('/cadastrar-produto', function(request, response) {
    return response.json({
        message: 'Produto cadastrado com sucesso !!!'
    })
})

// * ENDPOINT - POST => BUSCAR DE PRODUTO
app.post('/veiculos', function(request, response) {
    const body = request.body
    console.log(body)
    
    return response.json({
        message: 'Listagem de veiculos => ' + body
    })
})

// * ENDPOINT - PUT => ATUALIZAR PRODUTO
// * PUT ATUALIZA TODOS OS CAMPOS DO PRODUTO
app.put('/atualizar-produto', function(request, response) {
    return response.json({
        message: 'Produto atualizado com sucesso => PUT !!!'
    })
})

// * ENDPOINT - PATCH => ATUALIZAR PRODUTO
// * PATCH ATUALIZA DETERMINADOS OS CAMPOS DO PRODUTO
app.patch('/atualizar-produto', function(request, response) {
    return response.json({
        message: 'Produto atualizado com sucesso => PATCH !!!'
    })
})

// * ENDPOINT - DELETE => APAGAR OU DELETAR PRODUTO
// * DELETA UM PRODUTO
app.delete('/deletar-produto', function(request, response) {
    return response.json({
        message: 'Produto apagado com sucesso !!!'
    })
})

app.listen(3000, () => {
    console.log('Server started on port 3000 !!')
})

// GET http://localhost:3000