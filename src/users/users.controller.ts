import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { LoginDto } from './dto/users.login.dto';
import { CreateUserDto } from './dto/users.createUser.dto';
import { VerifyEmailDto } from './dto/users.verifyEmail.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    const { name, password, email } = createUserDto;

    return this.usersService.create(name, password, email);
  }

  @Post('email-verify')
  verifyEmail(@Body() verifyEmailDto: VerifyEmailDto) {
    const { signupVerifyToken } = verifyEmailDto;

    this.usersService.verifyEmail(signupVerifyToken);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log('login', loginDto);
    return loginDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('findOne', id);
    return this.usersService.getUserInfo(id);
  }
}
