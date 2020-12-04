import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'proveedores'}}})
export class Proveedores extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'Id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Nombre', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Producto', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  producto: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Pago', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  pago: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Proveedores>) {
    super(data);
  }
}

export interface ProveedoresRelations {
  // describe navigational properties here
}

export type ProveedoresWithRelations = Proveedores & ProveedoresRelations;
