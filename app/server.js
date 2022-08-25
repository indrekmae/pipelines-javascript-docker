const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! <br/> This is dockerized node 12 based javascript website!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
