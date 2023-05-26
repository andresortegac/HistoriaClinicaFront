export class Usuario {
    constructor(
      public id: string,
      public nombre: string,
      public apellido: string,
      public tipo_documento: string,
      public documento_identificacion: number,
      public estado: string,
      public sexo: string
    ) {}
  }
  