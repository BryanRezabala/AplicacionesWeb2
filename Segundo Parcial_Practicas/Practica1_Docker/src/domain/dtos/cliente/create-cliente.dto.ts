
export class CreateClienteDto {
  private constructor(
    public readonly nombre_cliente: string,
    public readonly direccion_cliente: string,
    public readonly numero_cliente: string,
    public readonly correo_cliente: string,
  ){}
  static create( props: {[key:string]: any} ): [string?, CreateClienteDto?]  {

    const { nombre_cliente, direccion_cliente, numero_cliente , correo_cliente } = props;

    if ( !nombre_cliente ) return ['La propiedad nombre es obligatoria', undefined];


    return [undefined, new CreateClienteDto(nombre_cliente, direccion_cliente, numero_cliente ,correo_cliente)];
  }
}