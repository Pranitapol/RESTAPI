const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const routes=require('./router/api');
const port=process.env.PORT ||3000;
mongoose.connect("mongodb+srv://newUser:user@123@cluster0.my37m.mongodb.net/students?retryWrites=true&w=majority",
{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db=mongoose.connection
db.on('error',(error)=>{
    console.error(error);
})
db.once('open',()=>{console.log('connect to database')})

app.use(bodyParser.json());
app.use('/api',routes)

app.listen(port,()=>{
    console.log(`listening to ${port}`);
})