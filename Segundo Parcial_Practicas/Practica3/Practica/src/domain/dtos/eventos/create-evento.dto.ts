export class CreateEventoDto {
  private constructor(
    public readonly nombre: string,
    public readonly fecha: string,
    public readonly horaini: string,
    public readonly horafin: string,
    public readonly descripcion: string,
    public readonly zona: string,
    public readonly finalidad: string,
    public readonly organizadorId: number,
    public readonly ventaentradaId:number,
    public readonly tipoeventoId: number,
    public readonly clienteId:number,

  ){}
  static create( props: {[key:string]: any} ): [string?, CreateEventoDto?]  {

    const { nombre ,fecha, horaini, horafin , descripcion, zona, finalidad, organizador, ventaentradaId, tipoeventoId, clienteId } = props;

    if ( !nombre ) return ['La propiedad nombre es obligatoria', undefined];


    return [undefined, new CreateEventoDto(nombre , fecha, horaini, horafin , descripcion, zona, finalidad, organizador, ventaentradaId, tipoeventoId ,clienteId)];
  }
}