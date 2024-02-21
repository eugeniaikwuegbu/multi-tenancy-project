module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'eugenia',
    password: 'hello1234',
    database: 'postgres',
    port: 5432,
  },
  migrations: {
    directory: './src/database/migrations',
    extension: 'ts',
    schemaName: '',
  },
  seeds: {
    directory: './src/database/seeds',
    extension: 'ts',
  },
};
