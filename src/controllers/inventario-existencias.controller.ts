import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {InventarioExistencias} from '../models';
import {InventarioExistenciasRepository} from '../repositories';

export class InventarioExistenciasController {
  constructor(
    @repository(InventarioExistenciasRepository)
    public inventarioExistenciasRepository : InventarioExistenciasRepository,
  ) {}

  @post('/inventario-existencias', {
    responses: {
      '200': {
        description: 'InventarioExistencias model instance',
        content: {'application/json': {schema: getModelSchemaRef(InventarioExistencias)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioExistencias, {
            title: 'NewInventarioExistencias',
            exclude: ['id'],
          }),
        },
      },
    })
    inventarioExistencias: Omit<InventarioExistencias, 'id'>,
  ): Promise<InventarioExistencias> {
    return this.inventarioExistenciasRepository.create(inventarioExistencias);
  }

  @get('/inventario-existencias/count', {
    responses: {
      '200': {
        description: 'InventarioExistencias model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(InventarioExistencias) where?: Where<InventarioExistencias>,
  ): Promise<Count> {
    return this.inventarioExistenciasRepository.count(where);
  }

  @get('/inventario-existencias', {
    responses: {
      '200': {
        description: 'Array of InventarioExistencias model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(InventarioExistencias, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(InventarioExistencias) filter?: Filter<InventarioExistencias>,
  ): Promise<InventarioExistencias[]> {
    return this.inventarioExistenciasRepository.find(filter);
  }

  @patch('/inventario-existencias', {
    responses: {
      '200': {
        description: 'InventarioExistencias PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioExistencias, {partial: true}),
        },
      },
    })
    inventarioExistencias: InventarioExistencias,
    @param.where(InventarioExistencias) where?: Where<InventarioExistencias>,
  ): Promise<Count> {
    return this.inventarioExistenciasRepository.updateAll(inventarioExistencias, where);
  }

  @get('/inventario-existencias/{id}', {
    responses: {
      '200': {
        description: 'InventarioExistencias model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InventarioExistencias, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(InventarioExistencias, {exclude: 'where'}) filter?: FilterExcludingWhere<InventarioExistencias>
  ): Promise<InventarioExistencias> {
    return this.inventarioExistenciasRepository.findById(id, filter);
  }

  @patch('/inventario-existencias/{id}', {
    responses: {
      '204': {
        description: 'InventarioExistencias PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InventarioExistencias, {partial: true}),
        },
      },
    })
    inventarioExistencias: InventarioExistencias,
  ): Promise<void> {
    await this.inventarioExistenciasRepository.updateById(id, inventarioExistencias);
  }

  @put('/inventario-existencias/{id}', {
    responses: {
      '204': {
        description: 'InventarioExistencias PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inventarioExistencias: InventarioExistencias,
  ): Promise<void> {
    await this.inventarioExistenciasRepository.replaceById(id, inventarioExistencias);
  }

  @del('/inventario-existencias/{id}', {
    responses: {
      '204': {
        description: 'InventarioExistencias DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inventarioExistenciasRepository.deleteById(id);
  }
}
