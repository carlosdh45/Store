import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenProductos, OrdenProductosRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProductosRepository extends DefaultCrudRepository<
  OrdenProductos,
  typeof OrdenProductos.prototype.id,
  OrdenProductosRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(OrdenProductos, dataSource);
  }
}
