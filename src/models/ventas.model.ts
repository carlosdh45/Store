import {Entity, model, property} from '@loopback/repository';

@model({settings: {idInjection: false, mssql: {schema: 'dbo', table: 'ventas'}}})
export class Ventas extends Entity {
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
    mssql: {columnName: 'idCliente', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idCliente: number;

  @property({
    type: 'date',
    required: true,
    mssql: {columnName: 'fecha', dataType: 'date', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  fecha: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Ventas>) {
    super(data);
  }
}

export interface VentasRelations {
  // describe navigational properties here
}

export type VentasWithRelations = Ventas & VentasRelations;
