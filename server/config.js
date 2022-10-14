import {config} from 'dotenv'

config()    

 export default {
    BUCKET_NAME: process.env.BUCKET_NAME || '', 
    Endpoint: process.env.ENDPOINT || ''
} 