import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/user.interface';

@Controller()
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  async index(): Promise<UserInterface[]> {
    return this.userService.findAll()
  }
}