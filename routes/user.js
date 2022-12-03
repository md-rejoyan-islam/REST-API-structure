// init express
const express = require("express");

const {getAllUsers,createUser,getSingleUser}=require('../controllers/user.controllers')

// create router
const router = express.Router();

// get route
router.get("/", getAllUsers);

//get single user
router.post("/:id/:skill", getSingleUser);

//create user
router.post("/", createUser);

// export router
module.exports = router;
