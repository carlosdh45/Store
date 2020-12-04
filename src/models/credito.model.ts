import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'credito'}}})
export class Credito extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mssql: {columnName: 'IdCliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idCliente: number;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'Cantidad', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  cantidad: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'Fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'CreditoAPB', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  creditoApb: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Credito>) {
    super(data);
  }
}

export interface CreditoRelations {
  // describe navigational properties here
}

export type CreditoWithRelations = Credito & CreditoRelations;
