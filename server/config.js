import {config} from 'dotenv'

config()    

console.log(process.env.hello)

/* export default {
    BUCKET_NAME: process.env.BUCKET_NAME || '', 
    Endpoint: process.env.Endpoint   
} */