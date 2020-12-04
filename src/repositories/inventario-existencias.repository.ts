import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioExistencias, InventarioExistenciasRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InventarioExistenciasRepository extends DefaultCrudRepository<
  InventarioExistencias,
  typeof InventarioExistencias.prototype.id,
  InventarioExistenciasRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(InventarioExistencias, dataSource);
  }
}
