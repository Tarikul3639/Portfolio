import { Controller, Get, Post, Res, Body } from '@nestjs/common';
import { AppService } from './app.service';
import type { Response } from 'express';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateContactDto } from './contact.dto';

@ApiTags('Portfolio')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('resume')
  @ApiOperation({ summary: 'Download resume PDF' })
  @ApiResponse({ status: 200, description: 'Resume downloaded successfully.' })
  downloadResume(@Res() res: Response) {
    const filePath = this.appService.getResumePath();

    return res.download(filePath, 'Resume.pdf'); // return the file as a download with the specified name 'resume.pdf'
  }

  @Post('contact')
  @ApiOperation({ summary: 'Send contact form message' })
  @ApiResponse({ status: 200, description: 'Message sent successfully.' })
  async sendMail(
    @Body() createContactDto: CreateContactDto,
  ) {

    // Call the service method to send the email with the provided contact form data
    await this.appService.sendMail(createContactDto);

    return {
      success: true,
      message: 'Message sent successfully.'
    };
  }
}
