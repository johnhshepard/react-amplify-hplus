// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Person } = initSchema(schema);

export {
  Product,
  Person
};