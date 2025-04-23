const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mailController");

router.get("/", mailController.showContactForm);
router.post("/send", mailController.sendEmail);

module.exports = router;
