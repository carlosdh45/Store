import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'inventarioExistencias'}}
})
export class InventarioExistencias extends Entity {
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
    length: 255,
    mssql: {columnName: 'nombre', dataType: 'nvarchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
    length: 255,
    mssql: {columnName: 'observacion', dataType: 'nvarchar', dataLength: 255, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  observacion: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<InventarioExistencias>) {
    super(data);
  }
}

export interface InventarioExistenciasRelations {
  // describe navigational properties here
}

export type InventarioExistenciasWithRelations = InventarioExistencias & InventarioExistenciasRelations;
