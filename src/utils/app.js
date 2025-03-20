require('dotenv').config()
const express=require('express')
const morgan=require('morgan')
const{default:helmet}=require('helmet')
const compression = require('compression')
const app=express()
// console.log(`Process::`,process.env)


//init midlewares
app.use(morgan('dev'))
app.use(compression())

//init db
require('../dbs/init.mongodb')
const {checkOverload}=require('../helpers/check_connect')
const { clearScreenDown } = require('readline')
checkOverload()

//init routes
app.use('/',require('../routes/index'))

//handling error

module.exports=app