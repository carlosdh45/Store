import {DefaultCrudRepository} from '@loopback/repository';
import {Cliente, ClienteRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ClienteRepository extends DefaultCrudRepository<
  Cliente,
  typeof Cliente.prototype.id,
  ClienteRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(Cliente, dataSource);
  }
}
