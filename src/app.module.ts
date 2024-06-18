import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatajudModule } from './datajud/datajud.module';

@Module({
  imports: [DatajudModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
