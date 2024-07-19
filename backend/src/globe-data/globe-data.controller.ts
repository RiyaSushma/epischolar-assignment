import { Controller, Get } from '@nestjs/common';
import { GlobeDataService } from './globe-data.service';

@Controller('globe-data')
export class GlobeDataController {
    constructor(private readonly globeDataService: GlobeDataService) {}

    @Get()
    getData() {
        return this.globeDataService.getData();
    }
}
