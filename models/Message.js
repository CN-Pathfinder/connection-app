const { Schema, model} = require('mongoose');

const messageSchema = new Schema({
    sender:{},
    recipient:{},
    time:{},
    messageBody:{}


})





module.exports = model('message', messageSchema)