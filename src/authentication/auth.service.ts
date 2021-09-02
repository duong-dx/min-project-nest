import {Injectable} from '@nestjs/common';

@Injectable()
export class AuthService {
  getDataLogin(): string {
    return 'Hello Duong'
  }
}