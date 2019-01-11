module.exports = function cors(origin) {
  return function(req, res, next) {
    res.header('Access-Control-Allow-Origin', origin)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )
    if (req.method === 'OPTIONS') {
      req.header('Access-Control-Allow-Methods', 'POST')
      return res.status(200).json({})
    }
    next()
  }
}
