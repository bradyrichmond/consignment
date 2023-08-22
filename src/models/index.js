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
  "COUPON": "COUPON",
  "TAX": "TAX"
};

const CouponType = {
  "PERCENT": "PERCENT",
  "FLAT": "FLAT"
};

const GenderType = {
  "BOYS": "BOYS",
  "GIRLS": "GIRLS",
  "UNISEX": "UNISEX"
};

const SizeType = {
  "PREEMIE": "PREEMIE",
  "NEWBORN": "NEWBORN",
  "ZERO_TO_THREE_MONTHS": "ZERO_TO_THREE_MONTHS",
  "THREE_MONTHS": "THREE_MONTHS",
  "THREE_TO_SIX_MONTHS": "THREE_TO_SIX_MONTHS",
  "SIX_MONTHS": "SIX_MONTHS",
  "SIX_TO_NINE_MONTHS": "SIX_TO_NINE_MONTHS",
  "NINE_MONTHS": "NINE_MONTHS",
  "NINE_TO_TWELVE_MONTHS": "NINE_TO_TWELVE_MONTHS",
  "TWELVE_MONTHS": "TWELVE_MONTHS",
  "TWELVE_TO_EIGHTEEN_MONTHS": "TWELVE_TO_EIGHTEEN_MONTHS",
  "EIGHTEEN_TWENTY_FOUR_MONTHS": "EIGHTEEN_TWENTY_FOUR_MONTHS",
  "TWO": "TWO",
  "TWO_THREE": "TWO_THREE",
  "THREE": "THREE",
  "THREE_FOUR": "THREE_FOUR",
  "FOUR": "FOUR",
  "FOUR_FIVE": "FOUR_FIVE",
  "FIVE": "FIVE",
  "FIVE_SIX": "FIVE_SIX",
  "SIX": "SIX",
  "SIX_SEVEN": "SIX_SEVEN",
  "SEVEN": "SEVEN",
  "SEVEN_EIGHT": "SEVEN_EIGHT",
  "EIGHT": "EIGHT",
  "EIGHT_NINE": "EIGHT_NINE",
  "EIGHT_TEN": "EIGHT_TEN",
  "NINE": "NINE",
  "NINE_TEN": "NINE_TEN",
  "TEN": "TEN",
  "TEN_ELEVEN": "TEN_ELEVEN",
  "TEN_TWELVE": "TEN_TWELVE",
  "ELEVEN": "ELEVEN",
  "ELEVEN_TWELVE": "ELEVEN_TWELVE",
  "TWELVE": "TWELVE",
  "TWELVE_THIRTEEN": "TWELVE_THIRTEEN",
  "TWELVE_FOURTEEN": "TWELVE_FOURTEEN",
  "THIRTEEN": "THIRTEEN",
  "THIRTEEN_FOURTEEN": "THIRTEEN_FOURTEEN",
  "FOURTEEN": "FOURTEEN",
  "FOURTEEN_FIFTEEN": "FOURTEEN_FIFTEEN",
  "FOURTEEN_SIXTEEN": "FOURTEEN_SIXTEEN",
  "FIFTEEN": "FIFTEEN",
  "FIFTEEN_SIXTEEN": "FIFTEEN_SIXTEEN",
  "SIXTEEN": "SIXTEEN",
  "SIXTEEN_EIGHTEEN": "SIXTEEN_EIGHTEEN"
};

const { Client, StoreCredit, Item, Transaction, Tender, Location, ConsignerSplit, Address, City, Brand, Category, AttributeType, AttributeTypeValue, CategoryPriceGuide, GiftCard, GiftCardLog, Coupon, ConsignmentDropoff, Cubby, Appointment, Blackout, ChatMessage, ChatRoom, Rewards, PickUp, CategoryAttribute } = initSchema(schema);

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
  Coupon,
  ConsignmentDropoff,
  Cubby,
  Appointment,
  Blackout,
  ChatMessage,
  ChatRoom,
  Rewards,
  PickUp,
  CategoryAttribute,
  ClientType,
  GiftCardLogType,
  TenderType,
  CouponType,
  GenderType,
  SizeType
};