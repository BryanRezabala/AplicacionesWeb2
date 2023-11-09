export class CreateOrganizadorDto {
    private constructor(
      public readonly nombre: string,
      public readonly empresa: string,
      public readonly correo: string,
      public readonly numero: string,
    ){}
    static create( props: {[key:string]: any} ): [string?, CreateOrganizadorDto?]  {
  
      const { nombre, empresa, correo , numero } = props;
  
      if ( !nombre ) return ['La propiedad nombre es obligatoria', undefined];
  
  
      return [undefined, new CreateOrganizadorDto(nombre, empresa, correo ,numero)];
    }
  }