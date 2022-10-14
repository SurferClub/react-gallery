import mongoose from 'mongoose'

(async ()=> {
       const db = await mongoose.connect('mongodb://localhost/galleryapp', {
        useNewUrlparser: true,
        useUnifiedTopology:true
        });
    console.log('connected to:', db.connection.name)
})();

