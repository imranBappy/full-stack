const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerPostController = async (req, res, next) =>{
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash;
        req.body.club = '608717011a8e9708d8e6cd66';

        const username = await User.find({username: req.body.username})
        if (username.length !== 0 ) {
            return res.json({
                message:'Username allready exist!',
                error: true,
                data:[]
            })
        };
        const sName = await User.find({username: req.body.sName.trim()})
            if (sName.length === 0 ) {
                req.body.sName = '60afcb9df1fea52e98f525f0'
            }else{
                req.body.sName = sName[0]._id;
            }
        const user = new User(req.body);
        await user.save()
        res.json({
            message:'User register successfully!',
            error: false,
            data:[]
        })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

exports.loginPostController = async (req, res, next)=>{
    const {username, password} = req.body
    try {
        console.log(req.body);
        const result = await User.find({username: username.trim()});
        const user = result[0];
        if (!user) return res.json({message:'User not found!', error: true})
        const matchPassword = await bcrypt.compare(password, user.password);
        if (!matchPassword) return res.json({message:'Password is wrang', error: true})

        const token = jwt.sign({_id:user._id}, process.env.SECRET,{expiresIn: '1h'})
        res.json({
            message:'User Login Successfull! ',
            token: token,
            error:false
        })
    } catch (error) {
        next(error)
    }
}

exports.changePasswordPutController = async (req, res, next) =>{
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        await User.findOneAndUpdate({username: req.body.username},{$set:{password: hash}})
        res.json({
            message: 'Password Changed Successfully!'
        })
    } catch (error) {
        next('There was a server side error')
    }
}

exports.singleUserGetController = async (req, res, next) =>{
    const {userId} = req.params
    try {
        const user = await User.findById(userId).select({
            password: 0,
            __v:0,
            createdAt:0,
            updatedAt:0
        })
        res.json({
            data:[user]
        })
    } catch (error) {
        next(error)
    }
}



exports.allUserGetController = async (req, res, next) =>{
    const page = req.query.page || 0
    try {
        const arr =  await User.find({})
        const user = await User.find({})
            .populate('sName', 'username')
            .skip(5* Number(page)).limit(5)
            .select({
                password: 0,
                __v:0,
                createdAt:0,
                updatedAt:0
            })
        res.json({
            users: user,
            length: arr.length
        })
    } catch (error) {
        next(error)
    }
}
