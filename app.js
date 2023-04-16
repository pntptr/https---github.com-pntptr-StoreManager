const express = require('express')
const app = express()
const port = 3000

// GET
app.get('/', (req, res) => {
  res.send('Store Manager')
})

// POST
app.post('/', (req, res) => {
  res.send('Got a POST request')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
