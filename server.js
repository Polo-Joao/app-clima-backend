import express from 'express'
import fetch from 'node-fetch'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(cors())

const API_KEY = process.env.API_KEY

app.get('/clima', async (req, res) => {
  const cidade = req.query.cidade

  try {
    const resposta = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${cidade}&lang=pt`
    )

    const dados = await resposta.json()

    res.json(dados)
  } catch (erro) {
    res.status(500).json({ erro: 'Erro ao buscar clima' })
  }
})

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000')
})