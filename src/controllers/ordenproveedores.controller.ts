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
import {OrdenPro} from '../models';
import {OrdenProRepository} from '../repositories';

export class OrdenproveedoresController {
  constructor(
    @repository(OrdenProRepository)
    public ordenProRepository : OrdenProRepository,
  ) {}

  @post('/orden-pros', {
    responses: {
      '200': {
        description: 'OrdenPro model instance',
        content: {'application/json': {schema: getModelSchemaRef(OrdenPro)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenPro, {
            title: 'NewOrdenPro',
            exclude: ['id'],
          }),
        },
      },
    })
    ordenPro: Omit<OrdenPro, 'id'>,
  ): Promise<OrdenPro> {
    return this.ordenProRepository.create(ordenPro);
  }

  @get('/orden-pros/count', {
    responses: {
      '200': {
        description: 'OrdenPro model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(OrdenPro) where?: Where<OrdenPro>,
  ): Promise<Count> {
    return this.ordenProRepository.count(where);
  }

  @get('/orden-pros', {
    responses: {
      '200': {
        description: 'Array of OrdenPro model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(OrdenPro, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(OrdenPro) filter?: Filter<OrdenPro>,
  ): Promise<OrdenPro[]> {
    return this.ordenProRepository.find(filter);
  }

  @patch('/orden-pros', {
    responses: {
      '200': {
        description: 'OrdenPro PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenPro, {partial: true}),
        },
      },
    })
    ordenPro: OrdenPro,
    @param.where(OrdenPro) where?: Where<OrdenPro>,
  ): Promise<Count> {
    return this.ordenProRepository.updateAll(ordenPro, where);
  }

  @get('/orden-pros/{id}', {
    responses: {
      '200': {
        description: 'OrdenPro model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(OrdenPro, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(OrdenPro, {exclude: 'where'}) filter?: FilterExcludingWhere<OrdenPro>
  ): Promise<OrdenPro> {
    return this.ordenProRepository.findById(id, filter);
  }

  @patch('/orden-pros/{id}', {
    responses: {
      '204': {
        description: 'OrdenPro PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(OrdenPro, {partial: true}),
        },
      },
    })
    ordenPro: OrdenPro,
  ): Promise<void> {
    await this.ordenProRepository.updateById(id, ordenPro);
  }

  @put('/orden-pros/{id}', {
    responses: {
      '204': {
        description: 'OrdenPro PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() ordenPro: OrdenPro,
  ): Promise<void> {
    await this.ordenProRepository.replaceById(id, ordenPro);
  }

  @del('/orden-pros/{id}', {
    responses: {
      '204': {
        description: 'OrdenPro DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordenProRepository.deleteById(id);
  }
}
