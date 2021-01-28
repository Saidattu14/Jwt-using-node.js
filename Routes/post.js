const router = require('express').Router()
const private_route = require('./Private')


router.get("/", private_route.auth, (req,res) => {
   res.send("Welcome to post page")
})

module.exports = router;