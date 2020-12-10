import {DefaultCrudRepository} from '@loopback/repository';
import {VCuentaPersonal, VCuentaPersonalRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class VCuentaPersonalRepository extends DefaultCrudRepository<
  VCuentaPersonal,
  typeof VCuentaPersonal.prototype.id,
  VCuentaPersonalRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(VCuentaPersonal, dataSource);
  }
}
