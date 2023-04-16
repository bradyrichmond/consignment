// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClientType = {
  "CLIENT": "CLIENT",
  "RETAIL_VENDOR": "RETAIL_VENDOR",
  "STORE_ACCOUNT": "STORE_ACCOUNT"
};

const { Client, Item, Transaction, Location, Address, City, Brand, Category, AttributeType, AttributeTypeValue, CategoryPriceGuide, CategoryAttribute } = initSchema(schema);

export {
  Client,
  Item,
  Transaction,
  Location,
  Address,
  City,
  Brand,
  Category,
  AttributeType,
  AttributeTypeValue,
  CategoryPriceGuide,
  CategoryAttribute,
  ClientType
};