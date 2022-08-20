import { Injectable } from '@nestjs/common';
//import nodeMailer
import * as nodeMailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodeMailer.Transporter;

  constructor() {
    this.transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: { user: 'cckn.dev@gmail.com', pass: 'sample-pw' },
    });
  }

  async sendMemberVerificationEmail(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    console.log('sendMemberVerificationEmail', emailAddress, signupVerifyToken);

    const baseUrl = 'http://localhost:3000';

    const url = `${baseUrl}/users/email-verify?signupVerifyToken=${signupVerifyToken}`;

    const mailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
        가입확인 버튼를 누르시면 가입 인증이 완료됩니다.<br/>
        <form action="${url}" method="POST">
          <button>가입확인</button>
        </form>  
        `,
    };
    return await this.transporter.sendMail(mailOptions);
  }
}
