'use trict'
const mongoose= require('mongoose')
const {db:{host,name,port}}= require('../configs/config.mongodb')
const connectString=`mongodb://${host}:${port}/${name}`
const {countConnect}=require('../helpers/check_connect')
console.log(connectString)


countConnect()
class Database{
    static instance=null;
    
    constructor() {
        this.connect()
    }

    connect(){
        mongoose.connect(connectString).then(_=>console.log(`Connect Mongoose Success`,countConnect()))
        .catch(err=>console.log(`Error Connect!`))
    }

    static getInstance(){
        if(!Database.instance){
            Database.instance=new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports=instanceMongodb