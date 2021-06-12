const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) =>{
    try {
        const {authorization} = req.headers;
        if (authorization) {
            const token = authorization.split(' ')[1]
            const decode = await jwt.verify(token, process.env.SECRET );
            res.user = decode._id
            next()
        }
        
    } catch (error) {
        error.status = 401;
        next(error)
    }
};

module.exports = isAuthenticated;