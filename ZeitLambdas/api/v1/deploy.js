const express = require('express')
const axios = require('axios')

const router = express.Router()

const headers = { 'Content-Type': 'application/json' }
const dataString = {
  build_parameters: { CIRCLE_JOB: 'frontend' },
}
const options = {
  url:
    'https://circleci.com/api/v1.1/project/github/floatingdots/floatingdots.com/tree/master',
  method: 'POST',
  headers: headers,
  data: dataString,
  auth: {
    username: process.env.CIRCLECI_APIKEY,
    password: '',
  },
}

router.get('/', (req, res) => {
  if (req.query.deploykey === process.env.DEPLOY_KEY) {
    axios(options)
      .then(ress => {
        res.json({
          message: ress.data,
        })
      })
      .catch(err => {
        res.status(500).json({
          message: err.message,
        })
      })
  } else {
    res.status(500).json({
      message: 'Invalid deploy key',
    })
  }
})

module.exports = router
