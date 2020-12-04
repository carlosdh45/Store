import {DefaultCrudRepository} from '@loopback/repository';
import {VentaDetalle, VentaDetalleRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VentaDetalleRepository extends DefaultCrudRepository<
  VentaDetalle,
  typeof VentaDetalle.prototype.id,
  VentaDetalleRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(VentaDetalle, dataSource);
  }
}
