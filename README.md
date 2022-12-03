#### REST API STRUCTURE 


###SETUP
```js
const express=require('express')
const dotenv= require('dotenv').config()
const port =process.env.PORT || 5005
const app=express()

app.use(express.json())
app.use(urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.send('API')
})


app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})
```

### package install
```console 
npm i express dotenv nodemon
```
