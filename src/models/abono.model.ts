import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'abono'}}})
export class Abono extends Entity {
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
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'creditoId', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  creditoId: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
    precision: 24,
    mssql: {columnName: 'monto', dataType: 'real', dataLength: null, dataPrecision: 24, dataScale: null, nullable: 'NO'},
  })
  monto: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Abono>) {
    super(data);
  }
}

export interface AbonoRelations {
  // describe navigational properties here
}

export type AbonoWithRelations = Abono & AbonoRelations;
