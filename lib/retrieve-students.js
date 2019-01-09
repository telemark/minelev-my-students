const axios = require('axios')
const generateToken = require('./generate-token')

module.exports = async userId => {
  const settings = {
    secret: process.env.BUDDY_JWT_SECRET,
    userId: userId
  }
  const url = `${process.env.BUDDY_SERVICE_URL}/students?name=*`
  const token = generateToken(settings)
  axios.defaults.headers.common['Authorization'] = token
  const { data } = await axios(url)
  return data
}