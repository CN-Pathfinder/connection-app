const express = require('express');
const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const Message = require('../models/Message');


router.get('/', async (req, res) => {
    return res.status(200).json({
        message: 'Testing get',
        data: await Message.find()
    })
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