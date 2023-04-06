// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClientType = {
  "CLIENT": "CLIENT",
  "RETAIL_VENDOR": "RETAIL_VENDOR",
  "STORE_ACCOUNT": "STORE_ACCOUNT"
};

const { Client, Item, Transaction, Location, Address, City, Category, PriceGuide, Brand } = initSchema(schema);

export {
  Client,
  Item,
  Transaction,
  Location,
  Address,
  City,
  Category,
  PriceGuide,
  Brand,
  ClientType
};