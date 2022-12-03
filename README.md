## REST API STRUCTURE 

![Folder Structure Image](https://drive.google.com/uc?id=13RapRNcLDsYGgsYA0dEW5serpsBsyXU6 "Folder Structure Photo")


### Packages
* Express JS
* Dotenv
* Nodemon

### Package Install
```console 
$ npm i express dotenv nodemon
```



### Server Structure
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

### Social Media Link
* [LinkedIn](https://www.linkedin.com/in/rej0yanislam/) </br>
* [Twitter](https://twitter.com/rej0yanislam)

