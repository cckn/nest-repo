import { Injectable, Provider } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';
import { v1 as uuid } from 'uuid';

@Injectable()
export class UsersService {
  constructor(private readonly emailService: EmailService) {}

  create(name: string, password: string, email: string) {
    this.checkUserExists(email);

    const signupVerifyToken = uuid();
    this.saveUser(name, password, email, signupVerifyToken);
    this.sendMemberVerificationEmail(email, signupVerifyToken);
  }

  private checkUserExists(email: string) {
    return false; // TODO: implement checkUserExists
  }

  private saveUser(
    name: string,
    password: string,
    email: string,
    signupVerifyToken: string,
  ) {
    return true; // TODO: implement saveUser
  }

  private sendMemberVerificationEmail(
    email: string,
    signupVerifyToken: string,
  ) {
    this.emailService.sendMemberVerificationEmail(email, signupVerifyToken);
  }

  async verifyEmail(signupVerifyToken: string): Promise<string> {
    // TODO:
    // 1. DB에서 signupVerifyToken으로 인증 대기 중인 유저를 찾고 없다면 에러
    // 2. 인증 유저가 있다면 인증 완료 처리
    // 3. 바로 로그인 가능하도록 JWT 토큰 발근

    throw new Error('Not implemented');
  }

  async login(email: string, password: string) {
    // TODO:
    // 1. DB에서 email에 해당하는 유저 정보를 찾고 없다면 에러
    // 2. 유저 정보와 비밀번호가 일치하지 않으면 에러
    // 3. JWT 토큰 발근
    throw new Error('Not implemented');
  }

  async getUserInfo(userId: string) {
    // TODO:
    // 1. DB에서 userId에 해당하는 유저 정보를 찾고 없다면 에러
    // 2. 유저 정보를 반환

    throw new Error('Not implemented');
  }
}
