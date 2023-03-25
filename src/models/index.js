// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Client, Item } = initSchema(schema);

export {
  Client,
  Item
};