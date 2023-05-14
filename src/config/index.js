require('dotenv').config()

// configurar la cuenta para que nodemailer se conecte a nuestro correo
const {
  HOST,
  PORT,
  USERACCOUNT,
  PASSWORD
} = process.env

// configurar el mensaje ⬇
const INFO_FROM = process.env.USERACCOUNT // aqui va el correo electronico de la empresa que enviara el correo
const INFO_SUBJECT = 'Equipo de Carhome' // este sera el nombre que aparecera en el header del correo electronico

module.exports = {
  // account config
  HOST,
  PORT,
  USERACCOUNT,
  PASSWORD,

  // message config
  INFO_FROM,
  INFO_SUBJECT
}
