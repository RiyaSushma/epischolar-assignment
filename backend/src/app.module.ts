import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobeDataModule } from './globe-data/globe-data.module';
import { GlobeDataController } from './globe-data/globe-data.controller';

@Module({
  imports: [GlobeDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
