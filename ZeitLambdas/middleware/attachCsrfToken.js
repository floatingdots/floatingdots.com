module.exports = function attachCsrfToken(url, cookie, value) {
  return function(req, res, next) {
    if (req.url == url) {
      res.cookie(cookie, value)
    }
    next()
  }
}
