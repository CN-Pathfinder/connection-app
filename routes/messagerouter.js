const express = require('express');
const { Router } = require('express');
const router = Router();
const Message = require('../models/Message');


router.get('/get', async (req, res) => {

    console.log(req.query.users)

    const sender = await Message.find({
        sender: req.query.sender,
        recipient: req.query.recipient,
    })
    const recipient = await Message.find({
        sender: req.query.recipient,
        recipient: req.query.sender,
    })
    const conversation = sender.concat(recipient);

    conversation.sort((message1, message2) => {
        if (message1.dateTime > message2.dateTime) {
            return 1;
        } else if (message1.dateTime < message2.dateTime) {
            return -1;
        }
        return 0;
    })

    return res.status(200).json(conversation)
})

router.post('/', async (req, res) => {
    const message = new Message({
        sender: req.body.sender,
        recipient: req.body.recipient,
        dateTime: req.body.dateTime,
        messageBody: req.body.messageBody,
        read: req.body.read,
        });
    message.save()
    return res.status(200).json({
        message: 'Testing post'
    })
})



module.exports = router;