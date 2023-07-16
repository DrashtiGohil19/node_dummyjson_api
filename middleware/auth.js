var jwt = require('jsonwebtoken');

const checktoken = (req,res,next) => {
    jwt.verify(req.headers.authorization,"dummyjson",next);
} 

module.exports = { checktoken }