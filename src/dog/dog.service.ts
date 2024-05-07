import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'WOWW';
  }

  public introduce(): string {
    return 'My name is REX';
  }

  public modifyDetail(): string {
    return 'Successfully modified';
  }
}
