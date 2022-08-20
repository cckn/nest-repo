import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/users.createUser.dto';
import { LoginDto } from './dto/users.login.dto';
import { VerifyEmailDto } from './dto/users.verifyEmail.dto';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto', createUserDto);
    return createUserDto;
  }

  @Post('email-verify')
  verifyEmail(@Body() verifyEmailDto: VerifyEmailDto) {
    console.log('verifyEmail', verifyEmailDto);
    return verifyEmailDto;
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    console.log('login', loginDto);
    return loginDto;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log('findOne', id);
    return id;
  }
}
