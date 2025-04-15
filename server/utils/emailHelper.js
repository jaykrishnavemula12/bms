const nodemailer = require("nodemailer");
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();

function replaceContent(content, creds) {
  let allkeysArr = Object.keys(creds);
  allkeysArr.forEach(function (key) {
    content = content.replace(`#{${key}}`, creds[key]);
  });
  return content;
}
async function EmailHelper(templateName, email, creds) {
  // console.log(templateName, email, creds)
  try {
    const templatePath = path.join(__dirname, "email_templates", templateName);
    let content = await fs.promises.readFile(templatePath, "utf-8");
    const transportDetails = {
      host: "smtp.gmail.com",
      port: 465,
      secure: false,
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    };
    console.log("SMTP user:", process.env.GMAIL_USER);
    console.log("SMTP pass:", process.env.GMAIL_PASSWORD);
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Mail from ScalerShows",
      text: `Hi ${creds.name} this your reset otp ${creds.otp}`,
      html: replaceContent(content, creds),
    };
    console.log("SMTP user:", process.env.GMAIL_USER);
    console.log("SMTP pass:", process.env.GMAIL_PASSWORD);

    const transporter = nodemailer.createTransport(transportDetails);
    await transporter.sendMail(mailOptions);
    console.log("email sent");
  } catch (err) {
    console.log(err);
  }
}
module.exports = EmailHelper;
