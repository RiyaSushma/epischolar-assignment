import { Test, TestingModule } from '@nestjs/testing';
import { GlobeDataService } from './globe-data.service';

describe('GlobeDataService', () => {
  let service: GlobeDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlobeDataService],
    }).compile();

    service = module.get<GlobeDataService>(GlobeDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
