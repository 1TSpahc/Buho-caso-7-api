const {
  HOST,
  PORT,
  USERACCOUNT,
  PASSWORD,
  // message config
  INFO_FROM,
  INFO_SUBJECT
} = require('../config/index')

const template = require('../template/index')

const { Router } = require('express')
const nodemailer = require('nodemailer')

const router = Router()
router.post('/', async (req, res) => {
  const { name, lastname, email } = req.body

  if (name && lastname && email) {
    const emailResponse = await sendMail(name, lastname, email)
    res.json({
      messageId: emailResponse
    })
  }
})

const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: HOST,
    port: Number(PORT),
    auth: {
      user: USERACCOUNT,
      pass: PASSWORD
    }
  })

  return transport
}

const sendMail = async (name, lastname, email) => {
  const transport = createTransport()
  const info = await transport.sendMail({
    from: INFO_FROM,
    to: email,
    subject: INFO_SUBJECT,
    html: template(name, lastname)
  })

  return info.messageId
}

module.exports = router
