const Charity = require('../models/Charity')
const seedData = require('./seeds.json')

Charity.remove({})
  .then(() => {
    return Charity.collection.insert(seedData)
  })
  .then(() => {
    process.exit()
  })
