import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from './authentication/auth.module';
import { UsersModule } from './models/users/users.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RouterModule.register([
      {
        path: 'users',
        module: UsersModule,
      }]
    )
  ],
})
export class AppModule {}
