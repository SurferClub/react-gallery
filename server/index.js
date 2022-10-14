import express from 'express'
import indexRoutes from './routes/index.routes'
import fileUpload from 'express-fileupload'
import imagesRoutes from './routes/images.routes'
import config from './config'
import './database'


const app = express()
app.use(imagesRoutes)

app.set('port', process.env.PORT || 3000);
console.log(process.env.hello)
app.use(fileUpload({
    tempFileDir: '/temp'
}))

app.use(indexRoutes)

app.listen(app.get('port'))
console.log('server on port:', app.get('port'))


