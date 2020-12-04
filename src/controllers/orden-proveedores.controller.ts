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
import {OrdenProductosRepository} from '../repositories';

export class OrdenProveedoresController {
  constructor(
    @repository(OrdenProductosRepository)
    public ordenProductosRepository : OrdenProductosRepository,
  ) {}

  @post('/', {
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
            
          }),
        },
      },
    })
    ordenPro: OrdenPro,
  ): Promise<OrdenPro> {
    return this.ordenProductosRepository.create(ordenPro);
  }

  @get('//count', {
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
    return this.ordenProductosRepository.count(where);
  }

  @get('/', {
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
    return this.ordenProductosRepository.find(filter);
  }

  @patch('/', {
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
    return this.ordenProductosRepository.updateAll(ordenPro, where);
  }

  @get('//{id}', {
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
    return this.ordenProductosRepository.findById(id, filter);
  }

  @patch('//{id}', {
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
    await this.ordenProductosRepository.updateById(id, ordenPro);
  }

  @put('//{id}', {
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
    await this.ordenProductosRepository.replaceById(id, ordenPro);
  }

  @del('//{id}', {
    responses: {
      '204': {
        description: 'OrdenPro DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.ordenProductosRepository.deleteById(id);
  }
}
