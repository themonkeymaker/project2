const express = require('express')
const router = express.Router()
const Charity = require('../models/Charity')

router.get('/', (req, res) => {
  Charity.find({}).then(charities => res.render('index', { charities }))
})

router.get('/charity/:id', (req, res) => {
  Charity.findOne({ _id: req.params.id }).then(charity => res.render('show_charity', { charity }))
})

module.exports = router;
