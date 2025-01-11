const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors({ origin: "http://localhost:3000" }));

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  port: 465,
  auth: {
    user: process.env.NEXT_PUBLIC_EMAIL,
    pass: process.env.NEXT_PUBLIC_PASS,
  },
});

app.post("/send-email", async (req, res) => {
  const { email } = req.body;

  try {
    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL,
      to: process.env.NEXT_PUBLIC_EMAIL,
      subject: "Roster member added alert",
      text: email,
    });
    res.status(200).send({ message: "Email sent successfully", info });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ message: "Failed to send email", error: err });
  }
});

const port = process.env.NEXT_PUBLIC_PORT;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
