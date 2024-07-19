import { Controller, Get } from '@nestjs/common';
import { GlobeDataService } from './globe-data.service';

@Controller('globe-data')
export class GlobeDataController {
    constructor(private readonly globeDataService: GlobeDataService) {}

    @Get()
    getData() {
        console.log('Received GET request for /globe-data');
        const data = this.globeDataService.getData();
        console.log('Data returned from service:', data);
        return data;
    }
}
