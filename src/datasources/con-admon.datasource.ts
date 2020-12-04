import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'conADMON',
  connector: 'mssql',
  url: 'mssql://carlos_h65_SQLLogin_1:cwe6i6sf74@Mercarlos.mssql.somee.com/Mercarlos',
  host: 'Mercarlos.mssql.somee.com',
  port: 1433,
  user: 'carlos_h65_SQLLogin_1',
  password: 'cwe6i6sf74',
  database: 'Mercarlos'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class ConAdmonDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'conADMON';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.conADMON', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
