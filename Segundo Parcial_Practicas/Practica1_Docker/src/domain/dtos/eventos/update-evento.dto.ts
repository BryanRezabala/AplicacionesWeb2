

export class UpdateEventoDto {

  private constructor(
    public readonly id: number,
    public readonly nombre: string,
    public readonly fecha?: string,
    public readonly horaini?: string,
    public readonly horafin?: string,
    public readonly descripcion?: string,
    public readonly zona?: string,
    public readonly finalidad?: string,
  ){}

  get values() {
    const returnObj: {[key: string]: any} = {};

    if ( this.nombre ) returnObj.nombre = this.nombre;
    if ( this.fecha ) returnObj.fecha = this.fecha;
    if ( this.horaini ) returnObj.horaini = this.horaini;
    if ( this.horafin ) returnObj.horafin = this.horafin;
    if ( this.descripcion ) returnObj.descripcion = this.descripcion;
    if ( this.zona) returnObj.zona = this.zona;
    if ( this.finalidad) returnObj.finalidad = this.finalidad;

    return returnObj;
  }


  static create( props: {[key:string]: any} ): [string?, UpdateEventoDto?]  {

    const { id, nombre , fecha, horaini, horafin, descripcion, zona, finalidad } = props;
    let newName =nombre;

    if ( !id || isNaN( Number(id)) ) {
      return ['id must be a valid number'];
    }

    if ( !nombre && !fecha ) {
      return ['At least one property must be provided'];
    }

    if ( !fecha && !horaini ) {
      return ['At least one property must be provided'];
    }
    if ( !horaini && !horafin ) {
      return ['At least one property must be provided'];
    }
    if ( !horafin && !descripcion ) {
      return ['At least one property must be provided'];
    }
    if ( !descripcion && !zona ) {
      return ['At least one property must be provided'];
    }
    if ( !zona && !finalidad ) {
      return ['At least one property must be provided'];
    }
    return [undefined, new UpdateEventoDto(id, nombre, fecha, horaini, horafin, descripcion, zona, finalidad )];
  }


}
