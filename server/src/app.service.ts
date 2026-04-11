import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailerService } from '@nestjs-modules/mailer';
import { join } from 'path';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService,
    private readonly mailerService: MailerService,
  ) { }

  /**
   * Returns the absolute path to the resume PDF file.
   */
  getResumePath(): string {
    // Note: ensure the 'src/assets' folder exists in your build or handle it via nest-cli.json assets
    return join(__dirname, 'assets', 'Tarikul_Islam_Resume_V2.pdf');
  }

  /**
   * Sends dual emails: one to the admin as a notification and one to the user as confirmation.
   */
  async sendMail(contactData: {
    name: string;
    email: string;
    company?: string;
    message: string;
  }) {
    // 1. Destructure the data for easier access
    const { name, email, company, message } = contactData;

    try {
      await Promise.all([
        // 2. Send Notification Email to Admin
        this.mailerService.sendMail({
          to: this.configService.get<string>('EMAIL_USER'),
          subject: `🚀 New Message from ${name}`,
          template: './admin-alert', // reference to
          context: {
            name,
            email,
            company: company || 'Not Specified',
            message,
            // Include frontend URL for potential follow-up links in the email template
            frontendUrl: this.configService.get<string>(
              'FRONTEND_URL',
              'http://localhost:3000',
            ),
          },
        }),

        // 3. Send Confirmation Email to User
        this.mailerService.sendMail({
          to: email,
          subject: 'Thank you for contacting Tarikul Islam!',
          template: './client-acknowledgment',
          context: {
            name,
            frontendUrl: this.configService.get<string>(
              'FRONTEND_URL',
              'http://localhost:3000',
            ),
          },
        }),
      ]);

      return { success: true };
    } catch (error) {
      // Log the error and throw a NestJS friendly exception
      console.error('Mail service error:', error);
      throw new InternalServerErrorException(
        'Failed to send email. Please try again later.',
      );
    }
  }
}
