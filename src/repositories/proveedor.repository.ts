import {DefaultCrudRepository} from '@loopback/repository';
import {Proveedor, ProveedorRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ProveedorRepository extends DefaultCrudRepository<
  Proveedor,
  typeof Proveedor.prototype.id,
  ProveedorRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(Proveedor, dataSource);
  }
}
