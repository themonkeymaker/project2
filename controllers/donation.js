const express = require('express')
const router = express.Router()
const Donation = require('../models/Donation')

router.get('/donations/', (req, res) => {
  Donation.find({})
    .populate('charity')
    .then(donations => res.render('donations', { donations }))
})

router.post('/donations/', (req, res) => {
  Donation.create(req.body)
    .then(myNewItem => {
      res.redirect('/donations/')
    })
})

router.get('/donations/edit/:id', (req, res) => {
  Donation.findOne({ _id: req.params.id })
    .populate('charity')
    .then(donation => res.render('edit_donation', { donation }));
})

router.post('/donations/edit/:id', (req, res) => {
  Donation.findByIdAndUpdate(req.params.id, req.body)
    .then(instance => {
      res.redirect('/donations/')
    })
})

router.post('/donations/:id/delete', (req, res) => {
  Donation.findByIdAndRemove(req.params.id)
    .then(() => {
      res.redirect('/donations/')
    })
})

module.exports = router
