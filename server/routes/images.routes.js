import {Router} from 'express'
const router = Router()
/* import AWS from 'aws-sdk'
import config from '../config' */

/* const firebaseEndpoint = new AWS.Endpoint(config.Endpoint)

const s3 = new AWS.S3({
    enpoint: firebaseEndpoint
}) */

router.post('/api/images/upload', async (req, res) => {
    const {file} = req.files
    /* console.log(file) */

    /* try {
      const uploadObject = await  s3.putObject({
            ACL: 'public-read',
            Body: file.data,
            Key: file.name
        }).promise()
        console.log(uploadObject)

    } catch (error) {
        console.log(error)
        res.send(error)
    } */

    return res.json("received")
})

router.get('/api/images', async (req, res) => {})

router.get('/api/images/:id', async (req, res) => {})

router.delete('/api/images/:id', async (req, res) => {})
export default router