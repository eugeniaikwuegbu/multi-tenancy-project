module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
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
