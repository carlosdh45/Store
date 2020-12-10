import {DefaultCrudRepository} from '@loopback/repository';
import {DetallePedido, DetallePedidoRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DetallePedidoRepository extends DefaultCrudRepository<
  DetallePedido,
  typeof DetallePedido.prototype.id,
  DetallePedidoRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(DetallePedido, dataSource);
  }
}
