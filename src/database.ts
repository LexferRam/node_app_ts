import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/ts_crud',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db => console.log('DB connected'))
    .catch(err => console.log(err));