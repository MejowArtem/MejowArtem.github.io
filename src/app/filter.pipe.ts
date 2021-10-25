import { Pipe, PipeTransform } from '@angular/core';
import { Data } from './data';

@Pipe({
    name: 'AlbumFilter'
})
export class AlbumFilterPipe implements PipeTransform{
    transform(array: Data[],albumId: number): any{
        if(albumId == 0){
            return array;
        }

        
        return array.filter(item => item.albumId == albumId);
    }
}