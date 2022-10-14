 import {Router} from 'express'
 import fileUpload from 'express-fileupload'
const router = Router()
import AWS from 'aws-sdk'
import config from '../config' 
import Image from '../models/image'

 const awsEndpoint = new AWS.Endpoint(config.Endpoint)

const s3 = new AWS.S3({
    endpoint: awsEndpoint
}) ;

router.post('/api/images/upload', async (req, res) => {
     const { file }= req.file;
     console.log(file)  

     try {
      await  s3.putObject({
            ACL: 'public-read',
            Bucket: config.BUCKET_NAME,
            Body: file.data,
            Key: file.name
        }).promise()

        const urlImage = `https://${config.BUCKET_NAME}.${config.Endpoint}/${file.name}`
        

    const image = new Image ({
            url: urlImage,
            key: file.name,
            title: req.body.title
        })
        await image.save()
        return res.json(image)
    } catch (error) {
        console.log(error)
        res.send(error)
    } 
    console.log('recceived')
    return res.json("received")
})

router.get('/api/images', async (req, res) => {
    const images = await Image.find();
    return res.json(images)
})

router.get('/api/images/:id', async (req, res) => {
    const image = await Image.findById(req.params.id)
    return res.json(image)
})

router.delete('/api/images/:id', async (req, res) => {
    const deleteImage = await Image.findByIdAndDelete(req.params.id)
    await s3.deleteObject({
        Bucket: config.BUCKET_NAME,
        Key: deleteImage.key
    }).promise()
    
    res.json(deleteImage)
})
export default router