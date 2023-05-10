// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const ClientType = {
  "CLIENT": "CLIENT",
  "RETAIL_VENDOR": "RETAIL_VENDOR",
  "STORE_ACCOUNT": "STORE_ACCOUNT"
};

const GiftCardLogType = {
  "ISSUED": "ISSUED",
  "PURCHASE": "PURCHASE"
};

const { Client, StoreCredit, Item, Transaction, Location, ConsignerSplit, Address, City, Brand, Category, AttributeType, AttributeTypeValue, CategoryPriceGuide, GiftCard, GiftCardLog, CategoryAttribute } = initSchema(schema);

export {
  Client,
  StoreCredit,
  Item,
  Transaction,
  Location,
  ConsignerSplit,
  Address,
  City,
  Brand,
  Category,
  AttributeType,
  AttributeTypeValue,
  CategoryPriceGuide,
  GiftCard,
  GiftCardLog,
  CategoryAttribute,
  ClientType,
  GiftCardLogType
};