import {Routes} from '@nestjs/core';
import { UsersService } from './users.service';

export const appRoutes: Routes = [
  {
    path: 'customers',
    module: UsersService,
    children: []
  },
];
