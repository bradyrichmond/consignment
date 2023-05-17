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

const TenderType = {
  "CASH": "CASH",
  "CREDIT_CARD": "CREDIT_CARD",
  "GIFT_CARD": "GIFT_CARD",
  "STORE_CREDIT": "STORE_CREDIT",
  "TAX": "TAX"
};

const { Client, StoreCredit, Item, Transaction, Tender, Location, ConsignerSplit, Address, City, Brand, Category, AttributeType, AttributeTypeValue, CategoryPriceGuide, GiftCard, GiftCardLog, CategoryAttribute } = initSchema(schema);

export {
  Client,
  StoreCredit,
  Item,
  Transaction,
  Tender,
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
  GiftCardLogType,
  TenderType
};