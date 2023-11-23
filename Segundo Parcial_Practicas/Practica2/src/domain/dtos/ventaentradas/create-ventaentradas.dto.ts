export class CreateVentaentradasDto {
    private constructor(
      public readonly precio: string,
      public readonly metodo_pago: string,
      public readonly reserva: string,
      public readonly tipo_entrada: string,
      public readonly precio_total: string,
      public readonly tipoentradaId: number,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateVentaentradasDto?]  {
  
      const { precio, metodo_pago, reserva , tipo_entrada , precio_total, tipoentradaId } = props;
  
      if ( !precio ) return ['La propiedad precio es obligatoria', undefined];
  
  
      return [undefined, new CreateVentaentradasDto(precio, metodo_pago, reserva , tipo_entrada , precio_total, tipoentradaId)];
    }
  }