import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  // might need to add the user and pass from google app
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendEmail = async (emailData) => {
  try {
    const emailOptions = {
      from: process.env.SMTP_USER,
      to: emailData.email,
      subject: emailData.subject,
      html: emailData.html,
    };

    await transporter.sendMail(emailOptions);
    console.log("mail send successfully", process.env.SMTP_USER);
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
