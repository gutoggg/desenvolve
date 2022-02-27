module.exports = app => {

  app.get('/atendimentos', (request, response) => {
    response.send('Você está na rota de atendimentos.')
  })

  app.post('/atendimentos', (request, response) => {
    console.log(request.body)
    response.send('Você está na rota de atendimentos e realizando um post.')
  })
  
}
