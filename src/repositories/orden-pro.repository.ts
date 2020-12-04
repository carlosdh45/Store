import {DefaultCrudRepository} from '@loopback/repository';
import {OrdenPro, OrdenProRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class OrdenProRepository extends DefaultCrudRepository<
  OrdenPro,
  typeof OrdenPro.prototype.id,
  OrdenProRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(OrdenPro, dataSource);
  }
}
