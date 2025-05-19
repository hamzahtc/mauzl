import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  Req,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { Authenticated } from '~auth/decoretors/authenticated.decorator';

@Authenticated()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('me')
  @ApiOkResponse({ type: UserDto })
  findMe(@Req() req) {
    const currentUserId = req.user.id;
    return this.usersService.findOne(currentUserId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch()
  update(@Req() req, @Body() updateUserDto: UpdateUserDto) {
    const currentUserId = req.user.id;
    return this.usersService.update(currentUserId, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
