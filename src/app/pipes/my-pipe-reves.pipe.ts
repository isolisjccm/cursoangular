import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipeReves'
})
export class MyPipeRevesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
