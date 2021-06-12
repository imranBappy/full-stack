const { Schema, model } = require('mongoose')

const clubSchem = new Schema({
    name:{
        type: String,
        trim: true,
        required: true,
        minlength:2,
        maxlength:25
    },
    clubHolder:{
        type: Schema.Types.ObjectId,
        ref:'user',
        required: true
    }
},{timestamps: true} );

const Club = model('club', clubSchem);
module.exports= Club;
