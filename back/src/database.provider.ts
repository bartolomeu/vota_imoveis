import databaseDatasource from './database.datasource';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = databaseDatasource;
      return dataSource.initialize();
    },
  },
];
