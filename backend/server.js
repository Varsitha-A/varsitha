const express=require('express')
const app=express()

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