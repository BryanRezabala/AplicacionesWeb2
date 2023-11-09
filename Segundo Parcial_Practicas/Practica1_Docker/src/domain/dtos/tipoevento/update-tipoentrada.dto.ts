export class UpdateTipoEventoDto {

    private constructor(
      public readonly id: number,
      public readonly tipo?: string,
      public readonly recaudacion?: string,
    ){}
  
    get values() {
      const returnObj: {[key: string]: any} = {};
  
      if ( this.tipo ) returnObj.tipo = this.tipo;
      if ( this.recaudacion ) returnObj.recaudacion = this.recaudacion;
  
      return returnObj;
    }
  
  
    static create( props: {[key:string]: any} ): [string?, UpdateTipoEventoDto?]  {
  
      const { id, tipo, recaudacion} = props;
      let newName =tipo;
  
      if ( !id || isNaN( Number(id)) ) {
        return ['id must be a valid number'];
      }
  
      if ( !tipo && !recaudacion ) {
        return ['At least one property must be provided'];
      }
      return [undefined, new UpdateTipoEventoDto(id, tipo, recaudacion)];
    }
  
  
}