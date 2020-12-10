import {DefaultCrudRepository} from '@loopback/repository';
import {VTransaccionesProveedor, VTransaccionesProveedorRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VTransaccionesProveedorRepository extends DefaultCrudRepository<
  VTransaccionesProveedor,
  typeof VTransaccionesProveedor.prototype.id,
  VTransaccionesProveedorRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(VTransaccionesProveedor, dataSource);
  }
}
