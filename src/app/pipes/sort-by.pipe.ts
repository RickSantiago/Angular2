import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<any>, args?: any): any {

      if (array) {

        let ordenarCampo = args[0]; // the field we want to sort by
        let ordenarDirecao = args[1];

        let modificador = 1;

        if (ordenarDirecao == "desc") {
          modificador = -1;
        }

        array.sort((a: any, b: any) => {

          if (a[ordenarCampo] < b[ordenarCampo]) {
            return -1 * modificador;
          } 
          else if (a[ordenarCampo] > b[ordenarCampo]) {
            return 1 * modificador;
          } 
          else {
            return 0;
          }
        });

        return array;
      }
  }
}
