export class CreateTipoEventoDto {
    private constructor(
      public readonly tipo: string,
      public readonly recaudacion: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateTipoEventoDto?]  {
  
      const { tipo, recaudacion } = props;
  
      if ( !tipo ) return ['La propiedad tipo es obligatoria', undefined];
      if ( !recaudacion ) return ['La propiedad recaudacion es obligatoria', undefined];
  
  
      return [undefined, new CreateTipoEventoDto(tipo, recaudacion)];
    }
  }