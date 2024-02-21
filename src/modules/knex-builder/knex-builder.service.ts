import { Injectable } from '@nestjs/common';
const knex = require('knex')(require('../../knexfile'));

@Injectable()
export class KnexBuilderService {
  async createSchema() {
    try {
      const schema = process.env.TENANT_ID;

      // Check if the schema exists
      const schemaExists = await this.doesSchemaExist(schema);

      if (!schemaExists) {
        // If the schema doesn't exist, create it
        await knex.raw(`CREATE SCHEMA ${schema}`);

        knex.client.config.migrations.schemaName = schema;

        // run migration
        await knex.migrate.latest();

        // Get migration details
        const [latestMigration] = await knex('knex_migrations')
          .orderBy('id', 'desc')
          .limit(1);

        return {
          sttausCode: 201,
          message: `Schema ${schema} created successfully.`,
        };
      }

      return {
        statusCode: 200,
        message: `Migration details for ${schema} already exist`,
      };
    } catch (error) {
      console.error('Error running migration:', error);
    }
  }

  async doesSchemaExist(schemaName: string) {
    const schemaExists = await knex.raw(
      `SELECT schema_name FROM information_schema.schemata WHERE schema_name = ?`,
      [schemaName],
    );

    return schemaExists.rows.length > 0;
  }
}
