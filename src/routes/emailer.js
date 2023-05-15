const {
  NODE_MAILER_HOST,
  NODE_MAILER_PORT,
  NODE_MAILER_USERACCOUNT,
  NODE_MAILER_PASSWORD,
  // message config
  INFO_FROM,
  INFO_SUBJECT
} = require('../config/index')

const template = require('../template/index')

const { Router } = require('express')
const nodemailer = require('nodemailer')

const router = Router()
router.post('/', async (req, res) => {
  try {
    const { name, lastname, email } = req.body

    if (name && lastname && email) {
      const emailResponse = await sendMail(name, lastname, email)

      console.log({ name, lastname, email })
      console.log(emailResponse)

      res.status(200).json({
        messageId: emailResponse
      })
    }
  } catch (e) {
    res.status(400).json(e)
  }
})

const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: NODE_MAILER_HOST,
    port: Number(NODE_MAILER_PORT),
    auth: {
      user: NODE_MAILER_USERACCOUNT,
      pass: NODE_MAILER_PASSWORD
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
