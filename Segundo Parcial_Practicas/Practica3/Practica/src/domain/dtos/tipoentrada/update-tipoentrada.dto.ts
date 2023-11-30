export class UpdateTipoentradaDto {

    private constructor(
      public readonly id: number,
      public readonly tipo?: string,
      public readonly ubicacion_entrada?: string,
      public readonly estado?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.tipo ) returnObj.tipo = this.tipo;
      if ( this.ubicacion_entrada ) returnObj.ubicacion_entrada = this.ubicacion_entrada;
      if ( this.estado ) returnObj.estado = this.estado;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateTipoentradaDto?]  {
  
      const { id, tipo, ubicacion_entrada, estado} = props;
      let newName =tipo;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !tipo && !ubicacion_entrada ) {
        return ['At least one property must be provided'];
      }
      if ( !ubicacion_entrada && !estado ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateTipoentradaDto(id, tipo, ubicacion_entrada, estado)];
    }
  
  
  }