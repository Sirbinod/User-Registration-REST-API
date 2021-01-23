const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./routes/userRouter');

const app = express();

app.use('/', userRouter);
app.use(bodyParser.json());
app.use('/', userRouter);

mongoose.connect(process.env.MONGODB, 
    {useCreateIndex:true, useNewUrlParser:true, useUnifiedTopology:true,useFindAndModify:false}
    ).then(()=>{
        console.log("DB connected");
    }).catch((err) =>{console.log(`sorry error ${err}`);});

app.listen(process.env.PORT, ()=>{
    console.log(`sucess port at ${process.env.PORT}`);
});