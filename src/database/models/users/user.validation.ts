import { JSONSchema } from 'objection';

export const UserValidation: JSONSchema = {
  type: 'object',
  title: 'User Schema Validation',
  required: ['first_name', 'last_name', 'email', 'password'],
  properties: {
    first_name: { type: 'string' },
    last_name: { type: 'string' },
    password: { type: 'string' },
    email: { type: 'string' },
  },
};
