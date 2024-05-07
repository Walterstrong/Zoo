import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatModule } from './cat/cat.module';
import { DogModule } from './dog/dog.module';
import { DogService } from './dog/dog.service';

@Module({
  imports: [CatModule, DogModule, DogModule],
  controllers: [AppController],
  providers: [AppService, DogService],
})
export class AppModule {}
