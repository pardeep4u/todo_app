/* 

Uses typescript [/] [*]
Uses mongoDB cloud [*]
Uses MVC [*]
Uses Swagger for DOCS [*]
Use Docker  

Completed

Create Todo app
    User can add todo items [*]
    user can delete todo items [*]
    user can update todo items [*]
    user can erase all items [*]
   

*/


import express , {Application,Request,Response,NextFunction} from "express";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
require('dotenv').config({path:__dirname + '/.env'})
import router from './routes/router';

const app:Application = express();
app.use(bodyParser.json());

//app.use(bodyParser.urlencoded({extended:false}))
const swaggerUI = require('swagger-ui-express');
const YAML = require("yamljs");
const swaggerDocs = YAML.load(__dirname + '/docs/api.yaml');

app.use("/api_docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));
app.use("/",router);

mongoose.connect(`${process.env.mongoURI}`,(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Connected to DB")
        app.listen(process.env.PORT,()=>{console.log(`Connected ON PORT ${process.env.PORT}`)})
    }
})
