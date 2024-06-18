import { Test, TestingModule } from '@nestjs/testing';
import { DatajudService } from './datajud.service';

describe('DatajudService', () => {
  let service: DatajudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatajudService],
    }).compile();

    service = module.get<DatajudService>(DatajudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
