'use strict'

const express = require('express')
const database = require('./database')
const app = express()

app.get('/', function(req,res) {
    res.send('Hello world!')
})

app.listen(3000,function() {
    console.log('Example app listening on port 3000!')
})

app.get('/testfind', function(req,res) {
    database.Kitten.find(function(err,kittens) {
        if (err) return res.error(err);
        console.log(kittens);
        res.json(kittens);
    })
})