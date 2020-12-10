import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mssql: {schema: 'dbo', table: 'vCuentaPersonal'}}
})
export class VCuentaPersonal extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    mssql: {columnName: 'idTransaccion', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'NO'},
  })
  idTransaccion: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mssql: {columnName: 'Cuenta', dataType: 'nvarchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'NO'},
  })
  cuenta: string;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'Debe', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  debe: number;

  @property({
    type: 'number',
    required: true,
    precision: 53,
    mssql: {columnName: 'Haber', dataType: 'float', dataLength: null, dataPrecision: 53, dataScale: null, nullable: 'NO'},
  })
  haber: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<VCuentaPersonal>) {
    super(data);
  }
}

export interface VCuentaPersonalRelations {
  // describe navigational properties here
}

export type VCuentaPersonalWithRelations = VCuentaPersonal & VCuentaPersonalRelations;
