const express = require('express')
const path = require('path')
const app = express()
const request = require('request');
const api = require('./server/route/api')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/podcastDB', {useNewUrlParser: true})
// mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost/weatherDB');



app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'category-images')))
app.use(express.static(path.join(__dirname, 'music')))
app.use(express.static(path.join(__dirname, 'audio-symbols')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)



const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})
// const PORT = 8080
// app.listen(process.env.PORT || PORT);
