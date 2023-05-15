require('dotenv').config()

// configurar la cuenta para que nodemailer se conecte a nuestro correo
const {
  NODE_MAILER_HOST,
  NODE_MAILER_PORT,
  NODE_MAILER_USERACCOUNT,
  NODE_MAILER_PASSWORD
} = process.env

// configurar el mensaje ⬇
const INFO_FROM = process.env.NODE_MAILER_USERACCOUNT // aqui va el correo electronico de la empresa que enviara el correo
const INFO_SUBJECT = 'Equipo de Carhome' // este sera el nombre que aparecera en el header del correo electronico

module.exports = {
  // account config
  NODE_MAILER_HOST,
  NODE_MAILER_PORT,
  NODE_MAILER_USERACCOUNT,
  NODE_MAILER_PASSWORD,

  // message config
  INFO_FROM,
  INFO_SUBJECT
}
