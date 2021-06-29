const Admin = require("../models/Admin")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.adminPostController = async (req, res, next) =>{
    try {
        const hash = await bcrypt.hash(req.body.password, 10)
        req.body.password = hash;
        const newAdmin = new Admin(req.body);
        await newAdmin.save();
        res.json({
            message: 'Admin Created successfully!',
            error: false
        })
    } catch (error) {
        next(error)
    }
}

exports.adminPostLoginController = async (req, res, next) =>{
    const {password, email} = req.body
    try {
        const result = await Admin.find({email: email.trim()});
        const admin = result[0];
        if (!admin) return res.json({message:'User not found!', error: true})
        const matchPassword = await bcrypt.compare(password, admin.password);
        if (!matchPassword) return res.json({message:'Password is wrang', error: true})
        const token = jwt.sign({
            _id:admin._id, 
            name:admin.name,
            email: admin.email,
            isAdmin: admin.isAdmin
        }, process.env.SECRET,{expiresIn: '24h'})
        res.json({
            message:'Admin Login Successfull! ',
            token: token,
            error:false
        })
    } catch (error) {
        next(error)
    }
}

exports.singleAdminGetController = async (req, res, next) =>{
    const userId = req.params.userId;
    try {
        const user = await Admin.findById(userId).select({
            password: 0,
            __v:0,
            createdAt:0,
            updatedAt:0
        })
        res.json({
            data: [user]
        })
    } catch (error) {
        next(error)
    }
}

exports.adminGetController = async (req, res, next) =>{
    try {
        const allAdmin = await Admin.find({}).select({
            password: 0,
            __v:0,
            createdAt:0,
            updatedAt:0
        })
        res.json({
            data: allAdmin
        })
    } catch (error) {
        next(error)
    }
}
exports.adminPutController = async (req, res, next) =>{
    
}