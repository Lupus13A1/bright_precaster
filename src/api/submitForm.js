import nodemailer from 'nodemailer';
import mongoose from 'mongoose';

const MONGOBD_URI = process.env.MONGOBD_URI;
mongoose.connect(MONGOBD_URI,{useNewUrlParser: true, useUnifiedTopology: true });

const FromSchema = new mongoose.Schema({
    name: String,
    email: String,
    messeage: String, 
});

const FormModel = mongoose.models.Form || mongoose.model('Form', FormSchema);

export default async (req, res) => {
    if (req.method === 'POST') {
      const { name, email, message } = req.body;
  
      // Save to MongoDB
      try {
        const newForm = new FormModel({ name, email, message });
        await newForm.save();
      } catch (error) {
        return res.status(500).json({ error: 'Failed to save to database' });
      }
  
      // Send Email
      try {
        let transporter = nodemailer.createTransport({
          service: 'gmail', // e.g., 'gmail'
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });
  
        await transporter.sendMail({
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER,
          subject: 'New Form Submission',
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });
  
        return res.status(200).json({ message: 'Form submitted successfully' });
      } catch (error) {
        return res.status(500).json({ error: 'Failed to send email' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  };