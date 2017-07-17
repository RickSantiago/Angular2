import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  publiccapitalize(palavra): string {
    return palavra.charAt(0).toUpperCase() + palavra.substring(1);
  }
}
