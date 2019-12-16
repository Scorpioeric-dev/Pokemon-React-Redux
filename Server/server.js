require('dotenv/config')
const express = require('express')
const massive = require('massive')
const {Port,Connection_String} = process.env

const app = express()
app.use(express.json())


massive(Connection_String).then(db => {
    app.set('db',db)
    app.listen(Port, () => console.log(`What up ${Port}`))
})