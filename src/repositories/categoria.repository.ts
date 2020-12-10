import {DefaultCrudRepository} from '@loopback/repository';
import {Categoria, CategoriaRelations} from '../models';
import {ConAdmonDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.conADMON') dataSource: ConAdmonDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
