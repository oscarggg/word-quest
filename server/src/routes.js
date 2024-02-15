module.exports = (app) => {
  app.post('/register', (req, res) => {
    res.send({
      message: `Hello ${req.body.email}. User has been added to db`
    })
  })
}
