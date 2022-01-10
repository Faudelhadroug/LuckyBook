const express = require('express')
const app = express()
const port = 3000
const { Trait } = require('./rarity.json')

console.log(Trait.length);
app.get('/', (req, res) => {

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})