const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const userRouter = require('./routes/userRouter');

mongoose.connect(process.env.MONGODB, 
    {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false}
    ).then(()=>{
        console.log("DB connected");
    }).catch((err) =>{console.log(`sorry error ${err}`);});

const app = express();

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());


app.listen(process.env.PORT, ()=>{
    console.log(`sucess port at ${process.env.PORT}`);
})

app.use('/', userRouter);