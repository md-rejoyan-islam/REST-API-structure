const {readFileSync,writeFileSync}=require('fs');
const { join } = require('path');
const path = require('path')


const data = JSON.parse(
  readFileSync(path.join(__dirname, "../db/userData.json"))
);
console.log(data);

/**
 * @desc get all users data
 * @name GET /api/v1/user 
 * @access public
 */
const getAllUsers=(req,res)=>{
    res.send('hello user')
}
/**
 * @desc get single user data
 * @name GET /api/v1/user
 * @access public
 */
const getSingleUser=(req,res)=>{
    const data=req.params
    res.send(data)
}

/**
 * @desc create a new user
 * @name GET /api/v1/user
 * @access public
 */
const createUser=(req,res)=>{
    
const data = JSON.parse(
  readFileSync(path.join(__dirname, "../db/userData.json"))
);
console.log(data);
    const dataa=req.body;
    data.push(dataa)
    writeFileSync(path.join(__dirname,'../db/userData.json'),JSON.stringify(data))
    console.log(data);
    res.send(data)
}
 

//export controllers
module.exports={
    getAllUsers,createUser,getSingleUser
}