const express=require('express');
const router=express.Router();
 const {getAlluser,signup,login}=require('../controllers/user-controller');
router.get("/register",getAlluser);
router.post("/signup",signup);
router.post("/login",login)
module.exports=router;
