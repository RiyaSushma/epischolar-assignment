import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class GlobeDataService {
    getData() {
        try {
            console.log("path dir: ", path.resolve(__dirname, '..',  '..', '..', 'scripts', 'data.json'));
            console.log("path env: ", process.env.DATA_FILE_PATH);
            
            const filePath = process.env.DATA_FILE_PATH || path.resolve(__dirname, '..',  '..', '..', 'scripts', 'data.json');
            if (!fs.existsSync(filePath)) {
                console.error('File not found:', filePath);
                return null;
            }
            const data = fs.readFileSync(filePath, 'utf-8');
            return JSON.parse(data);
        } catch (error) {
            console.error('Error reading or parsing file:', error);
            return null;
        }
    }
}
