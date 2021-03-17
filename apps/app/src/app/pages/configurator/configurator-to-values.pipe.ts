import { Pipe, PipeTransform } from '@angular/core';

interface ConfiguratorForm {
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
  fontWeight: number;
  fontWidth: number;
  fontOpticalSize: number;
  fontGrade: number;
  fontXtra: number;
  fontXopq: number;
  fontYopq: number;
  fontYtlc: number;
  fontYtuc: number;
  fontYtas: number;
  fontYtde: number;
}

@Pipe({
  name: 'configuratorToValues'
})
export class ConfiguratorToValuesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
