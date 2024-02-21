const knex = require('knex')(require('../../../knexfile.ts'));

exports.up = async function (knex) {
  const { schemaName } = knex.client.config.migrations;

  return knex.transaction(async (trx) =>
    trx.schema
      .createSchemaIfNotExists(schemaName)
      .then(() =>
        trx.schema.hasTable('users').then((tableExists) => {
          if (!tableExists) {
            return trx.schema
              .withSchema(schemaName)
              .createTable('users', (tableBuilder) => {
                tableBuilder
                  .uuid('id')
                  .unique()
                  .notNullable()
                  .defaultTo(knex.raw('gen_random_uuid()'))
                  .primary({ constraintName: `${'users'}_id` });
                tableBuilder.string('first_name').nullable();
                tableBuilder.string('last_name').nullable();
                tableBuilder.string('password').notNullable();
                tableBuilder.string('email').unique().notNullable();
                tableBuilder.timestamps(true, true);
              });
          }
        }),
      )
      .catch((e) => console.error('MIGRATION_ERROR', e)),
  );
};

exports.down = async function (knex) {
  const { schemaName } = knex.client.config.migrations;

  return knex.schema.withSchema(schemaName).dropTableIfExists('users');
};
