const express=require('express')
const app=express()
const dotenv= require('dotenv');

dotenv.config();

app.use(express.json())
mongoose=require('mongoose')
mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log('Connected to MongoDB');})
.catch((err)=>{console.log('Error connecting to MongoDB',err);});
app.use('/auth',require('./routes/authRoutes'))
app.use('/tasks',require('./routes/taskRoutes'))
const port=300
app.listen(port,()=>{
    console.log('server is running on port '+port);
})


app.get('/api',(req,res)=>{
    res.send('hi from madhu');
})

app.post('/api',(req,res)=>{
    res.send('post request received');
})
