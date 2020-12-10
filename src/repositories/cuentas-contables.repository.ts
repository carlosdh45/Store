import {DefaultCrudRepository} from '@loopback/repository';
import {CuentasContables, CuentasContablesRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CuentasContablesRepository extends DefaultCrudRepository<
  CuentasContables,
  typeof CuentasContables.prototype.id,
  CuentasContablesRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(CuentasContables, dataSource);
  }
}
