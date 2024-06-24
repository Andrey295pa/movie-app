import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleSize',
  standalone: true
})
export class TitleSizePipe implements PipeTransform {

  transform(value: string, size:number): unknown {
    if(value.length > size) {
      let str = '...';
      return value.slice(0, size-4) + str;

    }
    return value;
  }

}
