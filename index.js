require('dotenv').config()
const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true
})
.then(console.log('connected to db'))
.catch((err) => console.log('Error:', err))

const userRouter = require('./routes/user/user')

app.use(userRouter)

app.listen(process.env.PORT, () => {
    console.log('server is running on port:', process.env.PORT)
})

module.exports = app