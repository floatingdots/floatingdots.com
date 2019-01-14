const express = require('express')

const router = express.Router()

router.use('/message', require('./message'))
router.use('/deploy', require('./deploy'))

module.exports = router
