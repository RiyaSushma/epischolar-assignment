import { Test, TestingModule } from '@nestjs/testing';
import { GlobeDataController } from './globe-data.controller';

describe('GlobeDataController', () => {
  let controller: GlobeDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlobeDataController],
    }).compile();

    controller = module.get<GlobeDataController>(GlobeDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
