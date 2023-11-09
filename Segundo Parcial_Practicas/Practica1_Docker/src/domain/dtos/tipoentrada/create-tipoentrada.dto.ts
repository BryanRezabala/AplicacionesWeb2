export class CreateTipoentradaDto {
    private constructor(
      public readonly tipo: string,
      public readonly ubicacion_entrada: string,
      public readonly estado: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateTipoentradaDto?]  {
  
      const { tipo, ubicacion_entrada , estado } = props;
  
      if ( !tipo ) return ['La propiedad vip es obligatoria', undefined];
  
  
      return [undefined, new CreateTipoentradaDto(tipo, ubicacion_entrada , estado)];
    }
  }