const express = require('express')//require express

const models = require('./db/models')//getting modules from db(for server)
const db = models.db                 //because there is no point to run server without models.db

const app =  express()

db.sync({force: true})//sync all the require information then only start the server else no point
    .then(()=>{
        app.listen(8383,()=>{
            console.log('Server started on http://localhost:8383')
        })
    }).catch((err)=>{
        console.log(new Error('Could not start database'))
        console.log(err)
    })