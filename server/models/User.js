const {Schema, model} = require('mongoose');

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        minlength:2,
        maxlength:25
    },
    email:{
        type: String,
        trim: true,
        required: true,
        minlength:10,
        maxlength:50,
    },
    phone:{
        type: String,
        trim: true,
        required: true,
        minlength:10,
        maxlength:50,
    },
    username:{
        type: String,
        trim: true,
        required: true,
        minlength:5,
    },
    sName:{
        type: Schema.Types.ObjectId,
        ref: 'user',
        default: ()=> new ObjectId('608717011312708d8e6cd66d')
    },
    club:{
        type: Schema.Types.ObjectId,
        ref: 'club',
        default: ()=> new ObjectId('608717011a8e9708d8e6cd66')
    },
    isClubHolder:{
        type: Boolean,
        default: false
    },
    password:{
        type: String,
        trim: true,
        minlength: 10,
        required: true,
    },
    balance:{
        type: Number,
        default: 0
    }, 

}, {timestamps: true});

const User = model('user', userSchema);

module.exports = User;
