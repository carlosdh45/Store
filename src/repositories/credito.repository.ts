import {DefaultCrudRepository} from '@loopback/repository';
import {Credito, CreditoRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CreditoRepository extends DefaultCrudRepository<
  Credito,
  typeof Credito.prototype.idCliente,
  CreditoRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(Credito, dataSource);
  }
}
