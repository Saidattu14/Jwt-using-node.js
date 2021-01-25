const router = require('express').Router()
const User = require('../model/user');
const joi_val = require('@hapi/joi')

const schema_joi =  joi_val.object({
   name : joi_val.string().min(8).required(),
   password : joi_val.string().min(8).required(),
   email : joi_val.string().email().required()
})


router.post('/register',async (req,res) => {
   const {error} =  schema_joi.validate(req.body)
   
   if (error == null)
   {

   const data = new User({
      name : req.body.name,
      password : req.body.password,
      email : req.body.email,
   });
   try{
      const result = await data.save();
      console.log(result)
      res.send(result)
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