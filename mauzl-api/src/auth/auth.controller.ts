import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth/google-auth.guard';
import { LocalAuthGuard } from './guards/local-auth/local-auth.guard';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { CreateUserDto } from '~users/dto/create-user.dto';
import { UsersService } from '~users/users.service';
import { SigninDto } from './dto/signin.dto';
import { Authenticated } from './decoretors/authenticated.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Body() loginDto: SigninDto, @Req() req, @Res() res) {
    const { accessToken, refreshToken } = await this.authService.login(
      req.user.id,
    );

    // Set access token in cookie
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 60 minutes (short-lived access token)
    });

    // Set refresh token in cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days (long-lived refresh token)
    });

    res.send({ message: 'Login successful' });
  }

  @Authenticated()
  @UseGuards(RefreshAuthGuard)
  @Post('refresh')
  async refreshToken(@Req() req, @Res() res) {
    const { accessToken } = await this.authService.refreshToken(req.user.id);

    // Set the new access token in a cookie
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60 * 1000, // 15 minutes (short-lived access token)
    });

    res.send({ message: 'Token refreshed successfully' });
  }

  @Authenticated()
  @UseGuards(JwtAuthGuard)
  @Post('signout')
  async signOut(@Req() req, @Res() res) {
    // Invalidate the refresh token in the database

    // Clear access token cookie
    res.clearCookie('accessToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    // Clear refresh token cookie
    res.clearCookie('refreshToken', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });

    res.status(HttpStatus.OK).send({ message: 'Sign-out successful' });
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin() {}

  @UseGuards(GoogleAuthGuard)
  @Get('google/callback')
  async googleCallback(@Req() req, @Res() res) {
    const { accessToken, refreshToken } = await this.authService.login(
      req.user.id,
    );

    // Set access token in cookie
    res.cookie('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000, // 15 minutes (short-lived access token)
    });

    // Set refresh token in cookie
    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days (long-lived refresh token)
    });

    res.redirect(process.env.MAUZL_BASE_URL);
  }

  @Post('signup')
  async signup(@Body() dto: CreateUserDto) {
    console.log(dto);
    return this.userService.create(dto); // Make sure to hash password!
  }
}
