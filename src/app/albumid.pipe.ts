import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './data';

@Pipe({
    name: 'AlbumIdFilter'
})
export class AlbumIdPipe implements PipeTransform{
    transform(array: Data[]): any{
        const unique = [...new Set(array.map(item => item.albumId))];

        return unique;
    }
}