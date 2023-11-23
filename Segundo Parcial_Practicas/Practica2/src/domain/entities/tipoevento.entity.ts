

export class TipoEventoEntity {

    constructor(
      public id:  number,
      public tipo: string,
      public recaudacion: string,
    ){} 

    
    public static fromObject( object: {[key: string]: any} ): TipoEventoEntity {
      const { id, tipo, recaudacion} = object;
      if ( !id ) throw 'Id is required';
      if ( !tipo ) throw 'nombre is required';
      if ( !recaudacion ) throw 'apellido is required';
  
        return new TipoEventoEntity(id, tipo, recaudacion)
    }
  
  }