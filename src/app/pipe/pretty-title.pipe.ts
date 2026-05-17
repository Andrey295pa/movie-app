import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prettyTitle',
  standalone: true
})
export class PrettyTitlePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let beforeTitle = "--- $ --";
    let afterTitle = "-- $ ---";

    return beforeTitle + value.toUpperCase() + afterTitle;
  }

}
