const express = require('express')
const postmark = require('postmark')

const serverToken = process.env.POSTMARK_ACCESSTOKEN
const sender = process.env.EMAIL_SENDER
const receiver = process.env.EMAIL_RECEIVER

const router = express.Router()
const client = new postmark.ServerClient(serverToken)

router.post('/', (req, res) => {
  const body = req.body
  if (!body.email) {
    throw 'Email is blank'
  }
  client
    .sendEmail({
      From: `Floating Dots - Website <${sender}>`,
      To: receiver,
      ReplyTo: body.email,
      Subject: `Message from ${body.name}`,
      TextBody: `Name: ${body.name} \nEmail: ${body.email}\nMessage: ${
        body.message
      }`,
    })
    .then(() => {
      res.json({
        message: 'Messaege was sent.',
      })
    })
    .catch(err => {
      res.status(500).json({
        message: err,
      })
    })
})

module.exports = router
