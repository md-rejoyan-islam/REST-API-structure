const express=require('express')
const dotenv= require('dotenv').config()

const app=express()
const userRouter= require('./routes/user')

// init environment variable
const port = process.env.PORT || 5005;

//express middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/v1/user',userRouter)


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})