const express = require('express')

const { db } = require('./db/models')
//or
// const models =  require('./db/models')//require db/models before starting the server
// const db = models.db                  //as there is no point to run server without this file

const app =  express();

db.sync({force: true})
    .then(()=>{
        app.listen(8383,()=>{
            console.log('Server started on http://localhost:8383');
        })
    }).catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err)
    })