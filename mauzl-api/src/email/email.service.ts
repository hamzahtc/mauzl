import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'localhost',
      port: 1025, // Mailpit SMTP port
      secure: false,
    });
  }

  async sendEmail(to: string, subject: string, html: string) {
    return this.transporter.sendMail({
      from: '"Mauzl" <mauzlshop@gmail.com>',
      to,
      subject,
      html,
    });
  }
}
