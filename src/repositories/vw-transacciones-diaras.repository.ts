import {DefaultCrudRepository} from '@loopback/repository';
import {VwTransaccionesDiaras, VwTransaccionesDiarasRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VwTransaccionesDiarasRepository extends DefaultCrudRepository<
  VwTransaccionesDiaras,
  typeof VwTransaccionesDiaras.prototype.id,
  VwTransaccionesDiarasRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(VwTransaccionesDiaras, dataSource);
  }
}
