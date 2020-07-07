const { Schema, model} = require('mongoose');

const messageSchema = new Schema({
    sender:{
        type: String,
        required: true,
        trim: true,
    },
    recipient:{
        type: String,
        required: true,
        trim: true,
    },
    dateTime:{
        type: Date,
        required: true,
        default: new Date(),
    },
    messageBody:{
        type: String,
        required: true,
        trim: true,
    },
    read: {
        type: Boolean,
        required: true,
        default: false,
    }
})





module.exports = model('message', messageSchema)