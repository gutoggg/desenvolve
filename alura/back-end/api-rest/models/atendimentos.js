const conexao = require('../infraestrutura/conexao.js')
const moment = require('moment')
const res = require('express/lib/response')

class Atendimento {
  adiciona(atendimento, response){

    const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
    const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
   
    const dataValida = moment(data).isSameOrAfter(dataCriacao)
    const clienteValido = atendimento.cliente.length >= 5

    const validacoes = [
      {
        nome: 'data',
        valido: dataValida,
        mensagem: 'Data deve ser maior ou igual a data atual'
      },
      {
        nome: 'cliente',
        valido: clienteValido,
        mensagem: 'Cliente deve ter pelo menos cinco caracteres'
      }
    ]

    const erros = validacoes.filter((campo) => !campo.valido)
    const existemErros = erros.length

    if (existemErros){
      response.status(400).json(erros)
      console.log(data)
    } else {
      const atendimentoDatado = {...atendimento, dataCriacao, data}
  
      const sql = 'INSERT INTO Atendimentos SET ?'
    
      conexao.query(sql, atendimentoDatado, (erro, resultado) => {
        if (erro) {
          response.status(400).json(erro)
        } else {
          response.status(201).json(atendimento)
          console.log(atendimentoDatado)
        }
      })
    }
  }

  lista(response) {

    const sql = 'SELECT * FROM atendimentos'

    conexao.query(sql, (erro, resultado) => {
      if (erro){
        response.status(400).json(erro)
      } else {
        response.status(200).json(resultado)
      }
    })

  }

  buscaPorId(id, response){
    const sql = `SELECT * FROM atendimentos WHERE id = ${id}`

    conexao.query(sql, (erro, resultado) => {
      
      if (erro){
        response.status(400).json(erro)
      } else {
        const atendimento = resultado[0]
        response.status(200).json(atendimento)
      }
    })
  }

  altera(id, valores, response) {
    
    if (valores.data) {
      valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')
    }
    
    const sql = 'UPDATE atendimentos SET ? WHERE id=?'

    conexao.query(sql, [valores, id], (erro, resultado) => {

      if (erro) {
        response.status(400).json(erro)
      } else {
        response.status(200).json({...valores, id})
      }
    })
  }

  deleta(id, response){
    const sql = 'DELETE FROM atendimentos WHERE id = ?'

    conexao.query(sql, id, (erro, resultado) => {
      if (erro) {
        response.status(400).json(erro)
      } else {
        response.status(200).json({id})
      }
    })
  }

} 

module.exports = new Atendimento