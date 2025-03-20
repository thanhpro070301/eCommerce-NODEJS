'use trict'
const mongoose= require('mongoose')
const os=require('os')
const process=require('process')

const _SECONDS=50000000000

const countConnect= ()=>{
    const numConnection= mongoose.connections.length
    console.log(`Number of connections: ${numConnection}`)
}

const checkOverload=()=>{
    setInterval(()=>{
        const numConnection=mongoose.connections.length
        const numCores=os.cpus().length;
        const memoryUssage = process.memoryUsage().rss
        const maxConnections=numCores*5;
        console.log(`Active connection ${numConnection}`)
        console.log(`Memory ussage ${memoryUssage/1024/1024} MB`)
        if(numConnection>maxConnections){
            console.log(`Connection overload delected!`)
        }
    },_SECONDS)
}
module.exports={
    countConnect,
    checkOverload
}