module.exports = {
  register: (req, res) => {
    /* TODO */
    //validate user
    //validate pass
    //call DB
    //call login
    res.send({
      success: true,
      user: req.body.user,
      pass: req.body.pass,
      token: "testoken",
      errmsg: ""
    });
  },
  uniqueID: (req, res) => {
    /* TODO */
    //validate user
    //callDB
    //return
    res.send({
      success: true,
      errmsg: ""
    });
  },
  forgotPassword: (req, res) => {
    /* TODO */
    //validate user
    //generate timed token
    //send email
    //return
    res.send({
      success: true,
      errmsg: ""
    });
  },
  login: (req, res) => {
    /* TODO */
    //validate user
    //validate pass
    //validate session
    //call DB
    //generate token
    //return
    res.send({
      success: true,
      token: "testoken",
      errmsg: ""
    });
  }
};
