export class UpdateVentaentradasDto {

    private constructor(
      public readonly id: number,
      public readonly precio: string,
      public readonly metodo_pago: string,
      public readonly reserva: string,
      public readonly tipo_entrada: string,
      public readonly precio_total: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.precio ) returnObj.precio = this.precio;
      if ( this.metodo_pago ) returnObj.metodo_pago = this.metodo_pago;
      if ( this.reserva ) returnObj.reserva = this.reserva;
      if ( this.tipo_entrada ) returnObj.tipo_entrada = this.tipo_entrada;
      if ( this.precio_total ) returnObj.precio_total = this.precio_total;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateVentaentradasDto?]  {
  
      const { id, precio, metodo_pago, reserva , tipo_entrada , precio_total } = props;
      let newName =precio;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !precio && !metodo_pago ) {
        return ['At least one property must be provided'];
      }
      if ( !metodo_pago && !reserva ) {
        return ['At least one property must be provided'];
      }
      if ( !reserva && !tipo_entrada ) {
        return ['At least one property must be provided'];
      }
      if ( !tipo_entrada && !precio_total ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateVentaentradasDto(id, precio, metodo_pago, reserva , tipo_entrada , precio_total)];
    }
  
  
  }