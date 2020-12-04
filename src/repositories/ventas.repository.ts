import {DefaultCrudRepository} from '@loopback/repository';
import {Ventas, VentasRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VentasRepository extends DefaultCrudRepository<
  Ventas,
  typeof Ventas.prototype.id,
  VentasRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(Ventas, dataSource);
  }
}
