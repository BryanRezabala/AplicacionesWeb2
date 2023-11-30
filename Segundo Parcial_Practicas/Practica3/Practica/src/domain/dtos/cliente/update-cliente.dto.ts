export class UpdateClienteDto {

  private constructor(
    public readonly id: number,
    public readonly nombre_cliente?: string,
    public readonly direccion_cliente?: string,
    public readonly numero_cliente?: string,
    public readonly correo_cliente?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.nombre_cliente ) returnObj.nombre_cliente = this.nombre_cliente;
    if ( this.direccion_cliente ) returnObj.direccion_cliente = this.direccion_cliente;
    if ( this.numero_cliente ) returnObj.numero_cliente = this.numero_cliente;
    if ( this.correo_cliente ) returnObj.correo_cliente = this.correo_cliente;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateClienteDto?]  {

    const { id, nombre_cliente, direccion_cliente, numero_cliente, correo_cliente} = props;
    let newName =nombre_cliente;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !nombre_cliente && !direccion_cliente ) {
      return ['At least one property must be provided'];
    }
    if ( !direccion_cliente && !numero_cliente ) {
      return ['At least one property must be provided'];
    }
    if ( !numero_cliente && !correo_cliente ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateClienteDto(id, nombre_cliente, direccion_cliente, numero_cliente, correo_cliente)];
  }


}