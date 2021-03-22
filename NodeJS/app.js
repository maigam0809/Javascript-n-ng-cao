import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import productRouters from './routers/product';


// Cấu hình
dotenv.config();
const app = express();
app.use(bodyParser.json());

// routers
app.use('/api', productRouters);

// Connect Db'
// mongoose.connect(process.env.MOGO_URI, {
//     // useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useCreateIndex: true
// }).then(() =>{
//     console.log(`Database connected`);
// }).catch(err => {
//     console.log(`DB Connection Error: ${err.message}`);
//     });
// // mongoose.connection.on('Error' , err =>{
//         console.log(`Database connect faild, ${err.message}`);
// });


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
 }).then(()=>{
     console.log(`connection to database established`)
 }).catch(err=>{
     console.log(`db error ${err.message}`);
     process.exit(-1)
 })


const port = process.env.PORT || 8000;
app.listen(port, ()=>{
    console.log('Server is runing on port',port);
})