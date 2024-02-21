import { UserModel } from 'src/database/models/users';

const Knex = require('knex');
const knexConfig = require('../../knexfile');

const knexCache = new Map();

export async function BindKnex(req, res, next) {
  
  const knex = getKnexForRequest(req, knexCache);

  req.models = {
    User: UserModel.bindKnex(knex),
  };

  next();
}

function getKnexForRequest(req, knexCache) {
  let tenantId = req.query.tenantId;
  let knex = knexCache.get(tenantId);

  if (!knex) {
    knex = Knex(knexConfigForTenant(tenantId));

    knexCache.set(tenantId, knex);
  }

  return knex;
}

function knexConfigForTenant(tenantId) {

  process.env.TENANT_ID = tenantId;

  return knexConfig;
}
