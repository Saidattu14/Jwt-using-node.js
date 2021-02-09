const router = require('express').Router()
const User = require('../model/user');
const register = require('../model/registerValidation')
const bcrypt = require('bcryptjs')
const jwt   = require('jsonwebtoken');
require('dotenv').config();
router.post('/register',async (req,res) => {
   const error = register.register_validation(req.body)

  
   if (error == null)
   {
      const salt = await  bcrypt.genSalt(10);
      const hash_password = await bcrypt.hash(req.body.password, salt)
      const data = new User({
         name : req.body.name,
         password : hash_password,
         email : req.body.email,
      });
   try{
      const find_unique_name = await User.findOne({name : req.body.name})
      const find_unique_email = await User.findOne({email : req.body.email})
      if (find_unique_name != null)
      {
         res.send("Name already exits");
      }
      else if( find_unique_email != null)
      {
         res.send("Email already exits");
      }
      else
      {
         const result = await data.save();
         res.status(200).send("Registered Successfully");
      }
   }
   catch(error)
   {
      
      res.status(400).send(error);
   }
   }
   else
   {
      const message = error.details[0].message;
     
      res.status(400).send(message);

   }
})

router.post('/login',async (req,res) => {
   const error = register.register_validation(req.body)
   if (error == null)
   {
   try{
      const login = await User.findOne({name : req.body.name})
      const email = await User.findOne({email : req.body.email})
      if (login == null)
      {
         res.send("User_name is incorrect");
      }
      else if(email  == null)
      {
         res.send("Email is incorrect");
      }
      else
      {
         const  valid_password = await bcrypt.compare(req.body.password , login.password)
         if (!valid_password)
         {
            res.send("Password is Incorrect")
         }
         else
         {
            
            const token = jwt.sign({_id : login._id}, "shuusnsnususnu")
            res.header('auth-token',token).send(token);
      
         }
      }
   }
   catch(error)
   {
      
      res.status(400).send(error);
   }
   }
   else
   {

      const message = error.details[0].message;
      res.status(400).send(message);


   }
})



module.exports = router;