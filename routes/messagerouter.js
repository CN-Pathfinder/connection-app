const express = require('express');
const { Router } = require('express');
const router = Router();
const User = require('../models/User');

router.get('/', (req, res) => {
    return res.status(200).json({
        message: 'Hello... testing'
    })
})

module.exports = router;