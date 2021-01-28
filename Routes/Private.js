const jwt = require('jsonwebtoken')

function  auth (req,res,next) {
    const token = req.header('auth-token');
    if(!token) return  res.status(401).send('Access Denied');
    try
    {
        const verified = jwt.verify(token,'shuusnsnususnu');
        req.User = verified;
        next();
        
    }
    catch(error)
    {
        res.status.send("Invalid token")
    }
    
}

module.exports.auth = auth;