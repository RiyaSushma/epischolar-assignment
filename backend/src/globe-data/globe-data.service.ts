import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GlobeDataService {
    getData() {
        const filePath = path.resolve(__dirname, '..',  '..', '..', 'scripts', 'data.json');
        const data = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(data);
    }
}
