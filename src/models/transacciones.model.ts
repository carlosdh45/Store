import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'Transacciones'}}})
export class Transacciones extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  id: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Concepto', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  concepto: string;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'Fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Transacciones>) {
    super(data);
  }
}

export interface TransaccionesRelations {
  // describe navigational properties here
}

export type TransaccionesWithRelations = Transacciones & TransaccionesRelations;
