const mailModel = require("../models/mailModel");

exports.showContactForm = (req, res) => {
  res.render("form");
};

exports.sendEmail = async (req, res) => {
  try {
    const { email, subject, message } = req.body;
    await mailModel.sendEmail(email, subject, message);
    res.render("success", { email });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};
