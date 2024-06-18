import { Module } from '@nestjs/common';
import { DatajudService } from './datajud.service';
import { DatajudController } from './datajud.controller';

@Module({
  providers: [DatajudService],
  controllers: [DatajudController],
  imports: []
})
export class DatajudModule {}
