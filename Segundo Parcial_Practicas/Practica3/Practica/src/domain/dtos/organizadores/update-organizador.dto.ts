

export class UpdateOrganizadorDto {

    private constructor(
      public readonly id: number,
      public readonly nombre?: string,
      public readonly empresa?: string,
      public readonly correo?: string,
      public readonly numero?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.nombre ) returnObj.nombre = this.nombre;
      if ( this.empresa ) returnObj.empresa = this.empresa;
      if ( this.correo ) returnObj.correo = this.correo;
      if ( this.numero ) returnObj.number = this.numero;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateOrganizadorDto?]  {
  
      const { id, nombre, empresa, correo, numero } = props;
      let newName =nombre;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !nombre && !empresa ) {
        return ['At least one property must be provided'];
      }
      if ( !empresa && !correo ) {
        return ['At least one property must be provided'];
      }
      if ( !correo && !numero ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateOrganizadorDto(id, nombre, empresa, correo, numero)];
    }
  
  
  }