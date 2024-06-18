import { Test, TestingModule } from '@nestjs/testing';
import { DatajudController } from './datajud.controller';

describe('DatajudController', () => {
  let controller: DatajudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatajudController],
    }).compile();

    controller = module.get<DatajudController>(DatajudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
