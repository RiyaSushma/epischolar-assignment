import { Module } from '@nestjs/common';
import { GlobeDataController } from './globe-data.controller';
import { GlobeDataService } from './globe-data.service';

@Module({
  controllers: [GlobeDataController],
  providers: [GlobeDataService],
  exports: [GlobeDataService],
})
export class GlobeDataModule {}
