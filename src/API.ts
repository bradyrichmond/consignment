/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateClientInput = {
  id?: string | null,
  clientId?: string | null,
  clientType?: ClientType | null,
  firstName: string,
  lastName: string,
  companyName?: string | null,
  account: string,
  receiveMailInd: boolean,
  nextItemNumber: string,
  phone?: string | null,
  email?: string | null,
  createTimestamp?: string | null,
  activeTimestamp?: string | null,
  inactiveTimestamp?: string | null,
  modifiedBy: string,
  _version?: number | null,
  clientCreditId?: string | null,
};

export enum ClientType {
  CLIENT = "CLIENT",
  RETAIL_VENDOR = "RETAIL_VENDOR",
  STORE_ACCOUNT = "STORE_ACCOUNT",
}


export type ModelClientConditionInput = {
  clientId?: ModelStringInput | null,
  clientType?: ModelClientTypeInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  account?: ModelStringInput | null,
  receiveMailInd?: ModelBooleanInput | null,
  nextItemNumber?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createTimestamp?: ModelStringInput | null,
  activeTimestamp?: ModelStringInput | null,
  inactiveTimestamp?: ModelStringInput | null,
  modifiedBy?: ModelStringInput | null,
  and?: Array< ModelClientConditionInput | null > | null,
  or?: Array< ModelClientConditionInput | null > | null,
  not?: ModelClientConditionInput | null,
  clientCreditId?: ModelIDInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelClientTypeInput = {
  eq?: ClientType | null,
  ne?: ClientType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Client = {
  __typename: "Client",
  id: string,
  clientId?: string | null,
  clientType?: ClientType | null,
  firstName: string,
  lastName: string,
  companyName?: string | null,
  account: string,
  receiveMailInd: boolean,
  nextItemNumber: string,
  phone?: string | null,
  email?: string | null,
  createTimestamp?: string | null,
  activeTimestamp?: string | null,
  inactiveTimestamp?: string | null,
  modifiedBy: string,
  items?: ModelItemConnection | null,
  addresses?: ModelAddressConnection | null,
  credit?: StoreCredit | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  clientCreditId?: string | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  itemId?: string | null,
  userId: string,
  userName?: string | null,
  itemAcquireTypeId?: string | null,
  category?: Category | null,
  location?: Location | null,
  sectionId?: string | null,
  statusId: string,
  taxTypeId?: string | null,
  number?: string | null,
  itemName: string,
  description?: string | null,
  receiveTimestamp?: string | null,
  donateIndicator?: boolean | null,
  price: string,
  cost?: string | null,
  qty?: number | null,
  qtyTagPrint?: number | null,
  tagPrintedTimestamp?: string | null,
  commission?: string | null,
  itemAcquisitionTypeId?: string | null,
  brand?: Brand | null,
  saleDetailId?: string | null,
  titleChanged?: boolean | null,
  modifiedBy?: string | null,
  upcCode?: string | null,
  returned?: boolean | null,
  createTimestamp?: string | null,
  entryTimestamp?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  clientItemsId?: string | null,
  storeCreditItemsId: string,
  transactionItemsId: string,
  transactionMissingItemsId?: string | null,
  itemCategoryId?: string | null,
  itemLocationId?: string | null,
  itemBrandId?: string | null,
};

export type Category = {
  __typename: "Category",
  id: string,
  parent?: string | null,
  categoryId?: string | null,
  categoryName: string,
  categoryLevel: number,
  inactive?: boolean | null,
  lastUpdateTimestamp: string,
  attributeTypes?: ModelCategoryAttributeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCategoryAttributeConnection = {
  __typename: "ModelCategoryAttributeConnection",
  items:  Array<CategoryAttribute | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CategoryAttribute = {
  __typename: "CategoryAttribute",
  id: string,
  categoryId: string,
  attributeTypeId: string,
  category: Category,
  attributeType: AttributeType,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type AttributeType = {
  __typename: "AttributeType",
  id: string,
  attributeTypeId?: string | null,
  attributeTypeDescription: string,
  lastUpdateTimestamp: string,
  inactive?: boolean | null,
  categories?: ModelCategoryAttributeConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Location = {
  __typename: "Location",
  id: string,
  locationId?: string | null,
  locationName: string,
  address?: Address | null,
  taxRate: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  locationAddressId?: string | null,
};

export type Address = {
  __typename: "Address",
  id: string,
  addressId?: string | null,
  addressLabel?: string | null,
  label?: string | null,
  address1?: string | null,
  address2?: string | null,
  address3?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  primary?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  clientAddressesId?: string | null,
};

export type Brand = {
  __typename: "Brand",
  id: string,
  brandId?: string | null,
  description: string,
  lastUpdateTimestamp: string,
  inactive?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelAddressConnection = {
  __typename: "ModelAddressConnection",
  items:  Array<Address | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type StoreCredit = {
  __typename: "StoreCredit",
  id: string,
  amount: number,
  items?: ModelItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateClientInput = {
  id: string,
  clientId?: string | null,
  clientType?: ClientType | null,
  firstName?: string | null,
  lastName?: string | null,
  companyName?: string | null,
  account?: string | null,
  receiveMailInd?: boolean | null,
  nextItemNumber?: string | null,
  phone?: string | null,
  email?: string | null,
  createTimestamp?: string | null,
  activeTimestamp?: string | null,
  inactiveTimestamp?: string | null,
  modifiedBy?: string | null,
  _version?: number | null,
  clientCreditId?: string | null,
};

export type DeleteClientInput = {
  id: string,
  _version?: number | null,
};

export type CreateStoreCreditInput = {
  id?: string | null,
  amount: number,
  _version?: number | null,
};

export type ModelStoreCreditConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelStoreCreditConditionInput | null > | null,
  or?: Array< ModelStoreCreditConditionInput | null > | null,
  not?: ModelStoreCreditConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateStoreCreditInput = {
  id: string,
  amount?: number | null,
  _version?: number | null,
};

export type DeleteStoreCreditInput = {
  id: string,
  _version?: number | null,
};

export type CreateItemInput = {
  id?: string | null,
  itemId?: string | null,
  userId: string,
  userName?: string | null,
  itemAcquireTypeId?: string | null,
  sectionId?: string | null,
  statusId: string,
  taxTypeId?: string | null,
  number?: string | null,
  itemName: string,
  description?: string | null,
  receiveTimestamp?: string | null,
  donateIndicator?: boolean | null,
  price: string,
  cost?: string | null,
  qty?: number | null,
  qtyTagPrint?: number | null,
  tagPrintedTimestamp?: string | null,
  commission?: string | null,
  itemAcquisitionTypeId?: string | null,
  saleDetailId?: string | null,
  titleChanged?: boolean | null,
  modifiedBy?: string | null,
  upcCode?: string | null,
  returned?: boolean | null,
  createTimestamp?: string | null,
  entryTimestamp?: string | null,
  _version?: number | null,
  clientItemsId?: string | null,
  storeCreditItemsId: string,
  transactionItemsId: string,
  transactionMissingItemsId?: string | null,
  itemCategoryId?: string | null,
  itemLocationId?: string | null,
  itemBrandId?: string | null,
};

export type ModelItemConditionInput = {
  itemId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  itemAcquireTypeId?: ModelStringInput | null,
  sectionId?: ModelStringInput | null,
  statusId?: ModelStringInput | null,
  taxTypeId?: ModelStringInput | null,
  number?: ModelStringInput | null,
  itemName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  receiveTimestamp?: ModelStringInput | null,
  donateIndicator?: ModelBooleanInput | null,
  price?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  qtyTagPrint?: ModelIntInput | null,
  tagPrintedTimestamp?: ModelStringInput | null,
  commission?: ModelStringInput | null,
  itemAcquisitionTypeId?: ModelStringInput | null,
  saleDetailId?: ModelStringInput | null,
  titleChanged?: ModelBooleanInput | null,
  modifiedBy?: ModelStringInput | null,
  upcCode?: ModelStringInput | null,
  returned?: ModelBooleanInput | null,
  createTimestamp?: ModelStringInput | null,
  entryTimestamp?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
  clientItemsId?: ModelIDInput | null,
  storeCreditItemsId?: ModelIDInput | null,
  transactionItemsId?: ModelIDInput | null,
  transactionMissingItemsId?: ModelIDInput | null,
  itemCategoryId?: ModelIDInput | null,
  itemLocationId?: ModelIDInput | null,
  itemBrandId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateItemInput = {
  id: string,
  itemId?: string | null,
  userId?: string | null,
  userName?: string | null,
  itemAcquireTypeId?: string | null,
  sectionId?: string | null,
  statusId?: string | null,
  taxTypeId?: string | null,
  number?: string | null,
  itemName?: string | null,
  description?: string | null,
  receiveTimestamp?: string | null,
  donateIndicator?: boolean | null,
  price?: string | null,
  cost?: string | null,
  qty?: number | null,
  qtyTagPrint?: number | null,
  tagPrintedTimestamp?: string | null,
  commission?: string | null,
  itemAcquisitionTypeId?: string | null,
  saleDetailId?: string | null,
  titleChanged?: boolean | null,
  modifiedBy?: string | null,
  upcCode?: string | null,
  returned?: boolean | null,
  createTimestamp?: string | null,
  entryTimestamp?: string | null,
  _version?: number | null,
  clientItemsId?: string | null,
  storeCreditItemsId?: string | null,
  transactionItemsId?: string | null,
  transactionMissingItemsId?: string | null,
  itemCategoryId?: string | null,
  itemLocationId?: string | null,
  itemBrandId?: string | null,
};

export type DeleteItemInput = {
  id: string,
  _version?: number | null,
};

export type CreateTransactionInput = {
  id?: string | null,
  payoutId?: string | null,
  transCdId?: string | null,
  userId: string,
  actTransTimestamp?: string | null,
  actTransDesc?: string | null,
  actTransAmt?: string | null,
  hold?: boolean | null,
  glExportInd?: boolean | null,
  syncInd?: boolean | null,
  saleDetailId?: string | null,
  _version?: number | null,
  transactionLocationId?: string | null,
};

export type ModelTransactionConditionInput = {
  payoutId?: ModelStringInput | null,
  transCdId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  actTransTimestamp?: ModelStringInput | null,
  actTransDesc?: ModelStringInput | null,
  actTransAmt?: ModelStringInput | null,
  hold?: ModelBooleanInput | null,
  glExportInd?: ModelBooleanInput | null,
  syncInd?: ModelBooleanInput | null,
  saleDetailId?: ModelStringInput | null,
  and?: Array< ModelTransactionConditionInput | null > | null,
  or?: Array< ModelTransactionConditionInput | null > | null,
  not?: ModelTransactionConditionInput | null,
  transactionLocationId?: ModelIDInput | null,
};

export type Transaction = {
  __typename: "Transaction",
  id: string,
  client?: Client | null,
  items?: ModelItemConnection | null,
  payoutId?: string | null,
  transCdId?: string | null,
  userId: string,
  actTransTimestamp?: string | null,
  actTransDesc?: string | null,
  actTransAmt?: string | null,
  hold?: boolean | null,
  glExportInd?: boolean | null,
  syncInd?: boolean | null,
  saleDetailId?: string | null,
  location?: Location | null,
  tenders?: ModelTenderConnection | null,
  coupons?: ModelCouponConnection | null,
  missingItems?: ModelItemConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  transactionLocationId?: string | null,
};

export type ModelTenderConnection = {
  __typename: "ModelTenderConnection",
  items:  Array<Tender | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Tender = {
  __typename: "Tender",
  label: TenderType,
  receivedAmount: number,
  giftCardId?: string | null,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  transactionTendersId: string,
};

export enum TenderType {
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
  GIFT_CARD = "GIFT_CARD",
  STORE_CREDIT = "STORE_CREDIT",
  COUPON = "COUPON",
  TAX = "TAX",
}


export type ModelCouponConnection = {
  __typename: "ModelCouponConnection",
  items:  Array<Coupon | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Coupon = {
  __typename: "Coupon",
  id: string,
  name: string,
  type: CouponType,
  amount: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  transactionCouponsId?: string | null,
};

export enum CouponType {
  PERCENT = "PERCENT",
  FLAT = "FLAT",
}


export type UpdateTransactionInput = {
  id: string,
  payoutId?: string | null,
  transCdId?: string | null,
  userId?: string | null,
  actTransTimestamp?: string | null,
  actTransDesc?: string | null,
  actTransAmt?: string | null,
  hold?: boolean | null,
  glExportInd?: boolean | null,
  syncInd?: boolean | null,
  saleDetailId?: string | null,
  _version?: number | null,
  transactionLocationId?: string | null,
};

export type DeleteTransactionInput = {
  id: string,
  _version?: number | null,
};

export type CreateTenderInput = {
  label: TenderType,
  receivedAmount: number,
  giftCardId?: string | null,
  id?: string | null,
  _version?: number | null,
  transactionTendersId: string,
};

export type ModelTenderConditionInput = {
  label?: ModelTenderTypeInput | null,
  receivedAmount?: ModelFloatInput | null,
  giftCardId?: ModelStringInput | null,
  and?: Array< ModelTenderConditionInput | null > | null,
  or?: Array< ModelTenderConditionInput | null > | null,
  not?: ModelTenderConditionInput | null,
  transactionTendersId?: ModelIDInput | null,
};

export type ModelTenderTypeInput = {
  eq?: TenderType | null,
  ne?: TenderType | null,
};

export type UpdateTenderInput = {
  label?: TenderType | null,
  receivedAmount?: number | null,
  giftCardId?: string | null,
  id: string,
  _version?: number | null,
  transactionTendersId?: string | null,
};

export type DeleteTenderInput = {
  id: string,
  _version?: number | null,
};

export type CreateLocationInput = {
  id?: string | null,
  locationId?: string | null,
  locationName: string,
  taxRate: number,
  _version?: number | null,
  locationAddressId?: string | null,
};

export type ModelLocationConditionInput = {
  locationId?: ModelStringInput | null,
  locationName?: ModelStringInput | null,
  taxRate?: ModelFloatInput | null,
  and?: Array< ModelLocationConditionInput | null > | null,
  or?: Array< ModelLocationConditionInput | null > | null,
  not?: ModelLocationConditionInput | null,
  locationAddressId?: ModelIDInput | null,
};

export type UpdateLocationInput = {
  id: string,
  locationId?: string | null,
  locationName?: string | null,
  taxRate?: number | null,
  _version?: number | null,
  locationAddressId?: string | null,
};

export type DeleteLocationInput = {
  id: string,
  _version?: number | null,
};

export type CreateConsignerSplitInput = {
  id?: string | null,
  consignerPercentage: number,
  _version?: number | null,
};

export type ModelConsignerSplitConditionInput = {
  consignerPercentage?: ModelFloatInput | null,
  and?: Array< ModelConsignerSplitConditionInput | null > | null,
  or?: Array< ModelConsignerSplitConditionInput | null > | null,
  not?: ModelConsignerSplitConditionInput | null,
};

export type ConsignerSplit = {
  __typename: "ConsignerSplit",
  id: string,
  consignerPercentage: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateConsignerSplitInput = {
  id: string,
  consignerPercentage?: number | null,
  _version?: number | null,
};

export type DeleteConsignerSplitInput = {
  id: string,
  _version?: number | null,
};

export type CreateAddressInput = {
  id?: string | null,
  addressId?: string | null,
  addressLabel?: string | null,
  label?: string | null,
  address1?: string | null,
  address2?: string | null,
  address3?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  primary?: boolean | null,
  _version?: number | null,
  clientAddressesId?: string | null,
};

export type ModelAddressConditionInput = {
  addressId?: ModelStringInput | null,
  addressLabel?: ModelStringInput | null,
  label?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  address3?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  primary?: ModelBooleanInput | null,
  and?: Array< ModelAddressConditionInput | null > | null,
  or?: Array< ModelAddressConditionInput | null > | null,
  not?: ModelAddressConditionInput | null,
  clientAddressesId?: ModelIDInput | null,
};

export type UpdateAddressInput = {
  id: string,
  addressId?: string | null,
  addressLabel?: string | null,
  label?: string | null,
  address1?: string | null,
  address2?: string | null,
  address3?: string | null,
  city?: string | null,
  state?: string | null,
  zip?: string | null,
  primary?: boolean | null,
  _version?: number | null,
  clientAddressesId?: string | null,
};

export type DeleteAddressInput = {
  id: string,
  _version?: number | null,
};

export type CreateCityInput = {
  cityId: string,
  zip: string,
  city: string,
  state: string,
  id?: string | null,
  _version?: number | null,
};

export type ModelCityConditionInput = {
  cityId?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  and?: Array< ModelCityConditionInput | null > | null,
  or?: Array< ModelCityConditionInput | null > | null,
  not?: ModelCityConditionInput | null,
};

export type City = {
  __typename: "City",
  cityId: string,
  zip: string,
  city: string,
  state: string,
  id: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCityInput = {
  cityId?: string | null,
  zip?: string | null,
  city?: string | null,
  state?: string | null,
  id: string,
  _version?: number | null,
};

export type DeleteCityInput = {
  id: string,
  _version?: number | null,
};

export type CreateBrandInput = {
  id?: string | null,
  brandId?: string | null,
  description: string,
  lastUpdateTimestamp: string,
  inactive?: boolean | null,
  _version?: number | null,
};

export type ModelBrandConditionInput = {
  brandId?: ModelStringInput | null,
  description?: ModelStringInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelBrandConditionInput | null > | null,
  or?: Array< ModelBrandConditionInput | null > | null,
  not?: ModelBrandConditionInput | null,
};

export type UpdateBrandInput = {
  id: string,
  brandId?: string | null,
  description?: string | null,
  lastUpdateTimestamp?: string | null,
  inactive?: boolean | null,
  _version?: number | null,
};

export type DeleteBrandInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  parent?: string | null,
  categoryId?: string | null,
  categoryName: string,
  categoryLevel: number,
  inactive?: boolean | null,
  lastUpdateTimestamp: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  parent?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  categoryName?: ModelStringInput | null,
  categoryLevel?: ModelIntInput | null,
  inactive?: ModelBooleanInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  parent?: string | null,
  categoryId?: string | null,
  categoryName?: string | null,
  categoryLevel?: number | null,
  inactive?: boolean | null,
  lastUpdateTimestamp?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateAttributeTypeInput = {
  id?: string | null,
  attributeTypeId?: string | null,
  attributeTypeDescription: string,
  lastUpdateTimestamp: string,
  inactive?: boolean | null,
  _version?: number | null,
};

export type ModelAttributeTypeConditionInput = {
  attributeTypeId?: ModelStringInput | null,
  attributeTypeDescription?: ModelStringInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelAttributeTypeConditionInput | null > | null,
  or?: Array< ModelAttributeTypeConditionInput | null > | null,
  not?: ModelAttributeTypeConditionInput | null,
};

export type UpdateAttributeTypeInput = {
  id: string,
  attributeTypeId?: string | null,
  attributeTypeDescription?: string | null,
  lastUpdateTimestamp?: string | null,
  inactive?: boolean | null,
  _version?: number | null,
};

export type DeleteAttributeTypeInput = {
  id: string,
  _version?: number | null,
};

export type CreateAttributeTypeValueInput = {
  id?: string | null,
  attributeTypeValueId?: string | null,
  attributeTypeValue: string,
  lastUpdateTimestamp: string,
  inactive?: boolean | null,
  _version?: number | null,
  attributeTypeValueAttributeTypeId?: string | null,
};

export type ModelAttributeTypeValueConditionInput = {
  attributeTypeValueId?: ModelStringInput | null,
  attributeTypeValue?: ModelStringInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelAttributeTypeValueConditionInput | null > | null,
  or?: Array< ModelAttributeTypeValueConditionInput | null > | null,
  not?: ModelAttributeTypeValueConditionInput | null,
  attributeTypeValueAttributeTypeId?: ModelIDInput | null,
};

export type AttributeTypeValue = {
  __typename: "AttributeTypeValue",
  id: string,
  attributeType?: AttributeType | null,
  attributeTypeValueId?: string | null,
  attributeTypeValue: string,
  lastUpdateTimestamp: string,
  inactive?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  attributeTypeValueAttributeTypeId?: string | null,
};

export type UpdateAttributeTypeValueInput = {
  id: string,
  attributeTypeValueId?: string | null,
  attributeTypeValue?: string | null,
  lastUpdateTimestamp?: string | null,
  inactive?: boolean | null,
  _version?: number | null,
  attributeTypeValueAttributeTypeId?: string | null,
};

export type DeleteAttributeTypeValueInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryPriceGuideInput = {
  id?: string | null,
  description: string,
  price?: number | null,
  priceLevel?: number | null,
  sortOrder?: number | null,
  inactive?: boolean | null,
  _version?: number | null,
  categoryPriceGuideCategoryId?: string | null,
};

export type ModelCategoryPriceGuideConditionInput = {
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  priceLevel?: ModelIntInput | null,
  sortOrder?: ModelIntInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelCategoryPriceGuideConditionInput | null > | null,
  or?: Array< ModelCategoryPriceGuideConditionInput | null > | null,
  not?: ModelCategoryPriceGuideConditionInput | null,
  categoryPriceGuideCategoryId?: ModelIDInput | null,
};

export type CategoryPriceGuide = {
  __typename: "CategoryPriceGuide",
  id: string,
  category?: Category | null,
  description: string,
  price?: number | null,
  priceLevel?: number | null,
  sortOrder?: number | null,
  inactive?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  categoryPriceGuideCategoryId?: string | null,
};

export type UpdateCategoryPriceGuideInput = {
  id: string,
  description?: string | null,
  price?: number | null,
  priceLevel?: number | null,
  sortOrder?: number | null,
  inactive?: boolean | null,
  _version?: number | null,
  categoryPriceGuideCategoryId?: string | null,
};

export type DeleteCategoryPriceGuideInput = {
  id: string,
  _version?: number | null,
};

export type CreateGiftCardInput = {
  id?: string | null,
  qrCode?: string | null,
  barcode?: string | null,
  value: number,
  _version?: number | null,
};

export type ModelGiftCardConditionInput = {
  qrCode?: ModelStringInput | null,
  barcode?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  and?: Array< ModelGiftCardConditionInput | null > | null,
  or?: Array< ModelGiftCardConditionInput | null > | null,
  not?: ModelGiftCardConditionInput | null,
};

export type GiftCard = {
  __typename: "GiftCard",
  id: string,
  qrCode?: string | null,
  barcode?: string | null,
  value: number,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateGiftCardInput = {
  id: string,
  qrCode?: string | null,
  barcode?: string | null,
  value?: number | null,
  _version?: number | null,
};

export type DeleteGiftCardInput = {
  id: string,
  _version?: number | null,
};

export type CreateGiftCardLogInput = {
  id?: string | null,
  amount: number,
  type: GiftCardLogType,
  _version?: number | null,
  giftCardLogGiftCardId: string,
};

export enum GiftCardLogType {
  ISSUED = "ISSUED",
  PURCHASE = "PURCHASE",
}


export type ModelGiftCardLogConditionInput = {
  amount?: ModelFloatInput | null,
  type?: ModelGiftCardLogTypeInput | null,
  and?: Array< ModelGiftCardLogConditionInput | null > | null,
  or?: Array< ModelGiftCardLogConditionInput | null > | null,
  not?: ModelGiftCardLogConditionInput | null,
  giftCardLogGiftCardId?: ModelIDInput | null,
};

export type ModelGiftCardLogTypeInput = {
  eq?: GiftCardLogType | null,
  ne?: GiftCardLogType | null,
};

export type GiftCardLog = {
  __typename: "GiftCardLog",
  id: string,
  giftCard: GiftCard,
  amount: number,
  type: GiftCardLogType,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  giftCardLogGiftCardId: string,
};

export type UpdateGiftCardLogInput = {
  id: string,
  amount?: number | null,
  type?: GiftCardLogType | null,
  _version?: number | null,
  giftCardLogGiftCardId?: string | null,
};

export type DeleteGiftCardLogInput = {
  id: string,
  _version?: number | null,
};

export type CreateCouponInput = {
  id?: string | null,
  name: string,
  type: CouponType,
  amount: number,
  _version?: number | null,
  transactionCouponsId?: string | null,
};

export type ModelCouponConditionInput = {
  name?: ModelStringInput | null,
  type?: ModelCouponTypeInput | null,
  amount?: ModelIntInput | null,
  and?: Array< ModelCouponConditionInput | null > | null,
  or?: Array< ModelCouponConditionInput | null > | null,
  not?: ModelCouponConditionInput | null,
  transactionCouponsId?: ModelIDInput | null,
};

export type ModelCouponTypeInput = {
  eq?: CouponType | null,
  ne?: CouponType | null,
};

export type UpdateCouponInput = {
  id: string,
  name?: string | null,
  type?: CouponType | null,
  amount?: number | null,
  _version?: number | null,
  transactionCouponsId?: string | null,
};

export type DeleteCouponInput = {
  id: string,
  _version?: number | null,
};

export type CreateConsignmentDropoffInput = {
  id?: string | null,
  firstName: string,
  lastName: string,
  phone: string,
  complete: boolean,
  showError?: boolean | null,
  errorPrompt?: string | null,
  oversizedDescription?: string | null,
  oversizedItems?: boolean | null,
  newConsigner?: boolean | null,
  timerCleared?: boolean | null,
  createdTime: string,
  hasAppointment?: boolean | null,
  _version?: number | null,
  consignmentDropoffCubbyId?: string | null,
};

export type ModelConsignmentDropoffConditionInput = {
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  showError?: ModelBooleanInput | null,
  errorPrompt?: ModelStringInput | null,
  oversizedDescription?: ModelStringInput | null,
  oversizedItems?: ModelBooleanInput | null,
  newConsigner?: ModelBooleanInput | null,
  timerCleared?: ModelBooleanInput | null,
  createdTime?: ModelStringInput | null,
  hasAppointment?: ModelBooleanInput | null,
  and?: Array< ModelConsignmentDropoffConditionInput | null > | null,
  or?: Array< ModelConsignmentDropoffConditionInput | null > | null,
  not?: ModelConsignmentDropoffConditionInput | null,
  consignmentDropoffCubbyId?: ModelIDInput | null,
};

export type ConsignmentDropoff = {
  __typename: "ConsignmentDropoff",
  id: string,
  firstName: string,
  lastName: string,
  phone: string,
  complete: boolean,
  showError?: boolean | null,
  errorPrompt?: string | null,
  cubby?: Cubby | null,
  oversizedDescription?: string | null,
  oversizedItems?: boolean | null,
  newConsigner?: boolean | null,
  timerCleared?: boolean | null,
  createdTime: string,
  hasAppointment?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  consignmentDropoffCubbyId?: string | null,
};

export type Cubby = {
  __typename: "Cubby",
  id: string,
  cubbyNumber: string,
  locationId: string,
  inUse: boolean,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateConsignmentDropoffInput = {
  id: string,
  firstName?: string | null,
  lastName?: string | null,
  phone?: string | null,
  complete?: boolean | null,
  showError?: boolean | null,
  errorPrompt?: string | null,
  oversizedDescription?: string | null,
  oversizedItems?: boolean | null,
  newConsigner?: boolean | null,
  timerCleared?: boolean | null,
  createdTime?: string | null,
  hasAppointment?: boolean | null,
  _version?: number | null,
  consignmentDropoffCubbyId?: string | null,
};

export type DeleteConsignmentDropoffInput = {
  id: string,
  _version?: number | null,
};

export type CreateCubbyInput = {
  id?: string | null,
  cubbyNumber: string,
  locationId: string,
  inUse: boolean,
  _version?: number | null,
};

export type ModelCubbyConditionInput = {
  cubbyNumber?: ModelStringInput | null,
  locationId?: ModelStringInput | null,
  inUse?: ModelBooleanInput | null,
  and?: Array< ModelCubbyConditionInput | null > | null,
  or?: Array< ModelCubbyConditionInput | null > | null,
  not?: ModelCubbyConditionInput | null,
};

export type UpdateCubbyInput = {
  id: string,
  cubbyNumber?: string | null,
  locationId?: string | null,
  inUse?: boolean | null,
  _version?: number | null,
};

export type DeleteCubbyInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoryAttributeInput = {
  id?: string | null,
  categoryId: string,
  attributeTypeId: string,
  _version?: number | null,
};

export type ModelCategoryAttributeConditionInput = {
  categoryId?: ModelIDInput | null,
  attributeTypeId?: ModelIDInput | null,
  and?: Array< ModelCategoryAttributeConditionInput | null > | null,
  or?: Array< ModelCategoryAttributeConditionInput | null > | null,
  not?: ModelCategoryAttributeConditionInput | null,
};

export type UpdateCategoryAttributeInput = {
  id: string,
  categoryId?: string | null,
  attributeTypeId?: string | null,
  _version?: number | null,
};

export type DeleteCategoryAttributeInput = {
  id: string,
  _version?: number | null,
};

export type ModelClientFilterInput = {
  id?: ModelIDInput | null,
  clientId?: ModelStringInput | null,
  clientType?: ModelClientTypeInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  account?: ModelStringInput | null,
  receiveMailInd?: ModelBooleanInput | null,
  nextItemNumber?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  email?: ModelStringInput | null,
  createTimestamp?: ModelStringInput | null,
  activeTimestamp?: ModelStringInput | null,
  inactiveTimestamp?: ModelStringInput | null,
  modifiedBy?: ModelStringInput | null,
  and?: Array< ModelClientFilterInput | null > | null,
  or?: Array< ModelClientFilterInput | null > | null,
  not?: ModelClientFilterInput | null,
  clientCreditId?: ModelIDInput | null,
};

export type ModelClientConnection = {
  __typename: "ModelClientConnection",
  items:  Array<Client | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStoreCreditFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  and?: Array< ModelStoreCreditFilterInput | null > | null,
  or?: Array< ModelStoreCreditFilterInput | null > | null,
  not?: ModelStoreCreditFilterInput | null,
};

export type ModelStoreCreditConnection = {
  __typename: "ModelStoreCreditConnection",
  items:  Array<StoreCredit | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  itemId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  userName?: ModelStringInput | null,
  itemAcquireTypeId?: ModelStringInput | null,
  sectionId?: ModelStringInput | null,
  statusId?: ModelStringInput | null,
  taxTypeId?: ModelStringInput | null,
  number?: ModelStringInput | null,
  itemName?: ModelStringInput | null,
  description?: ModelStringInput | null,
  receiveTimestamp?: ModelStringInput | null,
  donateIndicator?: ModelBooleanInput | null,
  price?: ModelStringInput | null,
  cost?: ModelStringInput | null,
  qty?: ModelIntInput | null,
  qtyTagPrint?: ModelIntInput | null,
  tagPrintedTimestamp?: ModelStringInput | null,
  commission?: ModelStringInput | null,
  itemAcquisitionTypeId?: ModelStringInput | null,
  saleDetailId?: ModelStringInput | null,
  titleChanged?: ModelBooleanInput | null,
  modifiedBy?: ModelStringInput | null,
  upcCode?: ModelStringInput | null,
  returned?: ModelBooleanInput | null,
  createTimestamp?: ModelStringInput | null,
  entryTimestamp?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
  clientItemsId?: ModelIDInput | null,
  storeCreditItemsId?: ModelIDInput | null,
  transactionItemsId?: ModelIDInput | null,
  transactionMissingItemsId?: ModelIDInput | null,
  itemCategoryId?: ModelIDInput | null,
  itemLocationId?: ModelIDInput | null,
  itemBrandId?: ModelIDInput | null,
};

export type ModelTransactionFilterInput = {
  id?: ModelIDInput | null,
  payoutId?: ModelStringInput | null,
  transCdId?: ModelStringInput | null,
  userId?: ModelStringInput | null,
  actTransTimestamp?: ModelStringInput | null,
  actTransDesc?: ModelStringInput | null,
  actTransAmt?: ModelStringInput | null,
  hold?: ModelBooleanInput | null,
  glExportInd?: ModelBooleanInput | null,
  syncInd?: ModelBooleanInput | null,
  saleDetailId?: ModelStringInput | null,
  and?: Array< ModelTransactionFilterInput | null > | null,
  or?: Array< ModelTransactionFilterInput | null > | null,
  not?: ModelTransactionFilterInput | null,
  transactionLocationId?: ModelIDInput | null,
};

export type ModelTransactionConnection = {
  __typename: "ModelTransactionConnection",
  items:  Array<Transaction | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTenderFilterInput = {
  label?: ModelTenderTypeInput | null,
  receivedAmount?: ModelFloatInput | null,
  giftCardId?: ModelStringInput | null,
  and?: Array< ModelTenderFilterInput | null > | null,
  or?: Array< ModelTenderFilterInput | null > | null,
  not?: ModelTenderFilterInput | null,
  transactionTendersId?: ModelIDInput | null,
};

export type ModelLocationFilterInput = {
  id?: ModelIDInput | null,
  locationId?: ModelStringInput | null,
  locationName?: ModelStringInput | null,
  taxRate?: ModelFloatInput | null,
  and?: Array< ModelLocationFilterInput | null > | null,
  or?: Array< ModelLocationFilterInput | null > | null,
  not?: ModelLocationFilterInput | null,
  locationAddressId?: ModelIDInput | null,
};

export type ModelLocationConnection = {
  __typename: "ModelLocationConnection",
  items:  Array<Location | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelConsignerSplitFilterInput = {
  id?: ModelIDInput | null,
  consignerPercentage?: ModelFloatInput | null,
  and?: Array< ModelConsignerSplitFilterInput | null > | null,
  or?: Array< ModelConsignerSplitFilterInput | null > | null,
  not?: ModelConsignerSplitFilterInput | null,
};

export type ModelConsignerSplitConnection = {
  __typename: "ModelConsignerSplitConnection",
  items:  Array<ConsignerSplit | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAddressFilterInput = {
  id?: ModelIDInput | null,
  addressId?: ModelStringInput | null,
  addressLabel?: ModelStringInput | null,
  label?: ModelStringInput | null,
  address1?: ModelStringInput | null,
  address2?: ModelStringInput | null,
  address3?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  primary?: ModelBooleanInput | null,
  and?: Array< ModelAddressFilterInput | null > | null,
  or?: Array< ModelAddressFilterInput | null > | null,
  not?: ModelAddressFilterInput | null,
  clientAddressesId?: ModelIDInput | null,
};

export type ModelCityFilterInput = {
  cityId?: ModelStringInput | null,
  zip?: ModelStringInput | null,
  city?: ModelStringInput | null,
  state?: ModelStringInput | null,
  and?: Array< ModelCityFilterInput | null > | null,
  or?: Array< ModelCityFilterInput | null > | null,
  not?: ModelCityFilterInput | null,
};

export type ModelCityConnection = {
  __typename: "ModelCityConnection",
  items:  Array<City | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBrandFilterInput = {
  id?: ModelIDInput | null,
  brandId?: ModelStringInput | null,
  description?: ModelStringInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelBrandFilterInput | null > | null,
  or?: Array< ModelBrandFilterInput | null > | null,
  not?: ModelBrandFilterInput | null,
};

export type ModelBrandConnection = {
  __typename: "ModelBrandConnection",
  items:  Array<Brand | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  parent?: ModelStringInput | null,
  categoryId?: ModelStringInput | null,
  categoryName?: ModelStringInput | null,
  categoryLevel?: ModelIntInput | null,
  inactive?: ModelBooleanInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items:  Array<Category | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAttributeTypeFilterInput = {
  id?: ModelIDInput | null,
  attributeTypeId?: ModelStringInput | null,
  attributeTypeDescription?: ModelStringInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelAttributeTypeFilterInput | null > | null,
  or?: Array< ModelAttributeTypeFilterInput | null > | null,
  not?: ModelAttributeTypeFilterInput | null,
};

export type ModelAttributeTypeConnection = {
  __typename: "ModelAttributeTypeConnection",
  items:  Array<AttributeType | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelAttributeTypeValueFilterInput = {
  id?: ModelIDInput | null,
  attributeTypeValueId?: ModelStringInput | null,
  attributeTypeValue?: ModelStringInput | null,
  lastUpdateTimestamp?: ModelStringInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelAttributeTypeValueFilterInput | null > | null,
  or?: Array< ModelAttributeTypeValueFilterInput | null > | null,
  not?: ModelAttributeTypeValueFilterInput | null,
  attributeTypeValueAttributeTypeId?: ModelIDInput | null,
};

export type ModelAttributeTypeValueConnection = {
  __typename: "ModelAttributeTypeValueConnection",
  items:  Array<AttributeTypeValue | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryPriceGuideFilterInput = {
  id?: ModelIDInput | null,
  description?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  priceLevel?: ModelIntInput | null,
  sortOrder?: ModelIntInput | null,
  inactive?: ModelBooleanInput | null,
  and?: Array< ModelCategoryPriceGuideFilterInput | null > | null,
  or?: Array< ModelCategoryPriceGuideFilterInput | null > | null,
  not?: ModelCategoryPriceGuideFilterInput | null,
  categoryPriceGuideCategoryId?: ModelIDInput | null,
};

export type ModelCategoryPriceGuideConnection = {
  __typename: "ModelCategoryPriceGuideConnection",
  items:  Array<CategoryPriceGuide | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGiftCardFilterInput = {
  id?: ModelIDInput | null,
  qrCode?: ModelStringInput | null,
  barcode?: ModelStringInput | null,
  value?: ModelFloatInput | null,
  and?: Array< ModelGiftCardFilterInput | null > | null,
  or?: Array< ModelGiftCardFilterInput | null > | null,
  not?: ModelGiftCardFilterInput | null,
};

export type ModelGiftCardConnection = {
  __typename: "ModelGiftCardConnection",
  items:  Array<GiftCard | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGiftCardLogFilterInput = {
  id?: ModelIDInput | null,
  amount?: ModelFloatInput | null,
  type?: ModelGiftCardLogTypeInput | null,
  and?: Array< ModelGiftCardLogFilterInput | null > | null,
  or?: Array< ModelGiftCardLogFilterInput | null > | null,
  not?: ModelGiftCardLogFilterInput | null,
  giftCardLogGiftCardId?: ModelIDInput | null,
};

export type ModelGiftCardLogConnection = {
  __typename: "ModelGiftCardLogConnection",
  items:  Array<GiftCardLog | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCouponFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  type?: ModelCouponTypeInput | null,
  amount?: ModelIntInput | null,
  and?: Array< ModelCouponFilterInput | null > | null,
  or?: Array< ModelCouponFilterInput | null > | null,
  not?: ModelCouponFilterInput | null,
  transactionCouponsId?: ModelIDInput | null,
};

export type ModelConsignmentDropoffFilterInput = {
  id?: ModelIDInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  complete?: ModelBooleanInput | null,
  showError?: ModelBooleanInput | null,
  errorPrompt?: ModelStringInput | null,
  oversizedDescription?: ModelStringInput | null,
  oversizedItems?: ModelBooleanInput | null,
  newConsigner?: ModelBooleanInput | null,
  timerCleared?: ModelBooleanInput | null,
  createdTime?: ModelStringInput | null,
  hasAppointment?: ModelBooleanInput | null,
  and?: Array< ModelConsignmentDropoffFilterInput | null > | null,
  or?: Array< ModelConsignmentDropoffFilterInput | null > | null,
  not?: ModelConsignmentDropoffFilterInput | null,
  consignmentDropoffCubbyId?: ModelIDInput | null,
};

export type ModelConsignmentDropoffConnection = {
  __typename: "ModelConsignmentDropoffConnection",
  items:  Array<ConsignmentDropoff | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCubbyFilterInput = {
  id?: ModelIDInput | null,
  cubbyNumber?: ModelStringInput | null,
  locationId?: ModelStringInput | null,
  inUse?: ModelBooleanInput | null,
  and?: Array< ModelCubbyFilterInput | null > | null,
  or?: Array< ModelCubbyFilterInput | null > | null,
  not?: ModelCubbyFilterInput | null,
};

export type ModelCubbyConnection = {
  __typename: "ModelCubbyConnection",
  items:  Array<Cubby | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoryAttributeFilterInput = {
  id?: ModelIDInput | null,
  categoryId?: ModelIDInput | null,
  attributeTypeId?: ModelIDInput | null,
  and?: Array< ModelCategoryAttributeFilterInput | null > | null,
  or?: Array< ModelCategoryAttributeFilterInput | null > | null,
  not?: ModelCategoryAttributeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionClientFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  clientId?: ModelSubscriptionStringInput | null,
  clientType?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  companyName?: ModelSubscriptionStringInput | null,
  account?: ModelSubscriptionStringInput | null,
  receiveMailInd?: ModelSubscriptionBooleanInput | null,
  nextItemNumber?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  createTimestamp?: ModelSubscriptionStringInput | null,
  activeTimestamp?: ModelSubscriptionStringInput | null,
  inactiveTimestamp?: ModelSubscriptionStringInput | null,
  modifiedBy?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionClientFilterInput | null > | null,
  or?: Array< ModelSubscriptionClientFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionStoreCreditFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionStoreCreditFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreCreditFilterInput | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  itemId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  userName?: ModelSubscriptionStringInput | null,
  itemAcquireTypeId?: ModelSubscriptionStringInput | null,
  sectionId?: ModelSubscriptionStringInput | null,
  statusId?: ModelSubscriptionStringInput | null,
  taxTypeId?: ModelSubscriptionStringInput | null,
  number?: ModelSubscriptionStringInput | null,
  itemName?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  receiveTimestamp?: ModelSubscriptionStringInput | null,
  donateIndicator?: ModelSubscriptionBooleanInput | null,
  price?: ModelSubscriptionStringInput | null,
  cost?: ModelSubscriptionStringInput | null,
  qty?: ModelSubscriptionIntInput | null,
  qtyTagPrint?: ModelSubscriptionIntInput | null,
  tagPrintedTimestamp?: ModelSubscriptionStringInput | null,
  commission?: ModelSubscriptionStringInput | null,
  itemAcquisitionTypeId?: ModelSubscriptionStringInput | null,
  saleDetailId?: ModelSubscriptionStringInput | null,
  titleChanged?: ModelSubscriptionBooleanInput | null,
  modifiedBy?: ModelSubscriptionStringInput | null,
  upcCode?: ModelSubscriptionStringInput | null,
  returned?: ModelSubscriptionBooleanInput | null,
  createTimestamp?: ModelSubscriptionStringInput | null,
  entryTimestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionTransactionFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  payoutId?: ModelSubscriptionStringInput | null,
  transCdId?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
  actTransTimestamp?: ModelSubscriptionStringInput | null,
  actTransDesc?: ModelSubscriptionStringInput | null,
  actTransAmt?: ModelSubscriptionStringInput | null,
  hold?: ModelSubscriptionBooleanInput | null,
  glExportInd?: ModelSubscriptionBooleanInput | null,
  syncInd?: ModelSubscriptionBooleanInput | null,
  saleDetailId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
  or?: Array< ModelSubscriptionTransactionFilterInput | null > | null,
};

export type ModelSubscriptionTenderFilterInput = {
  label?: ModelSubscriptionStringInput | null,
  receivedAmount?: ModelSubscriptionFloatInput | null,
  giftCardId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTenderFilterInput | null > | null,
  or?: Array< ModelSubscriptionTenderFilterInput | null > | null,
};

export type ModelSubscriptionLocationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  locationId?: ModelSubscriptionStringInput | null,
  locationName?: ModelSubscriptionStringInput | null,
  taxRate?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionLocationFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationFilterInput | null > | null,
};

export type ModelSubscriptionConsignerSplitFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  consignerPercentage?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionConsignerSplitFilterInput | null > | null,
  or?: Array< ModelSubscriptionConsignerSplitFilterInput | null > | null,
};

export type ModelSubscriptionAddressFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  addressId?: ModelSubscriptionStringInput | null,
  addressLabel?: ModelSubscriptionStringInput | null,
  label?: ModelSubscriptionStringInput | null,
  address1?: ModelSubscriptionStringInput | null,
  address2?: ModelSubscriptionStringInput | null,
  address3?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
  primary?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionAddressFilterInput | null > | null,
  or?: Array< ModelSubscriptionAddressFilterInput | null > | null,
};

export type ModelSubscriptionCityFilterInput = {
  cityId?: ModelSubscriptionStringInput | null,
  zip?: ModelSubscriptionStringInput | null,
  city?: ModelSubscriptionStringInput | null,
  state?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCityFilterInput | null > | null,
  or?: Array< ModelSubscriptionCityFilterInput | null > | null,
};

export type ModelSubscriptionBrandFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  brandId?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  lastUpdateTimestamp?: ModelSubscriptionStringInput | null,
  inactive?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionBrandFilterInput | null > | null,
  or?: Array< ModelSubscriptionBrandFilterInput | null > | null,
};

export type ModelSubscriptionCategoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  parent?: ModelSubscriptionStringInput | null,
  categoryId?: ModelSubscriptionStringInput | null,
  categoryName?: ModelSubscriptionStringInput | null,
  categoryLevel?: ModelSubscriptionIntInput | null,
  inactive?: ModelSubscriptionBooleanInput | null,
  lastUpdateTimestamp?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryFilterInput | null > | null,
};

export type ModelSubscriptionAttributeTypeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  attributeTypeId?: ModelSubscriptionStringInput | null,
  attributeTypeDescription?: ModelSubscriptionStringInput | null,
  lastUpdateTimestamp?: ModelSubscriptionStringInput | null,
  inactive?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionAttributeTypeFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttributeTypeFilterInput | null > | null,
};

export type ModelSubscriptionAttributeTypeValueFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  attributeTypeValueId?: ModelSubscriptionStringInput | null,
  attributeTypeValue?: ModelSubscriptionStringInput | null,
  lastUpdateTimestamp?: ModelSubscriptionStringInput | null,
  inactive?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionAttributeTypeValueFilterInput | null > | null,
  or?: Array< ModelSubscriptionAttributeTypeValueFilterInput | null > | null,
};

export type ModelSubscriptionCategoryPriceGuideFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  description?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  priceLevel?: ModelSubscriptionIntInput | null,
  sortOrder?: ModelSubscriptionIntInput | null,
  inactive?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCategoryPriceGuideFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryPriceGuideFilterInput | null > | null,
};

export type ModelSubscriptionGiftCardFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  qrCode?: ModelSubscriptionStringInput | null,
  barcode?: ModelSubscriptionStringInput | null,
  value?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionGiftCardFilterInput | null > | null,
  or?: Array< ModelSubscriptionGiftCardFilterInput | null > | null,
};

export type ModelSubscriptionGiftCardLogFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  amount?: ModelSubscriptionFloatInput | null,
  type?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGiftCardLogFilterInput | null > | null,
  or?: Array< ModelSubscriptionGiftCardLogFilterInput | null > | null,
};

export type ModelSubscriptionCouponFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  amount?: ModelSubscriptionIntInput | null,
  and?: Array< ModelSubscriptionCouponFilterInput | null > | null,
  or?: Array< ModelSubscriptionCouponFilterInput | null > | null,
};

export type ModelSubscriptionConsignmentDropoffFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  complete?: ModelSubscriptionBooleanInput | null,
  showError?: ModelSubscriptionBooleanInput | null,
  errorPrompt?: ModelSubscriptionStringInput | null,
  oversizedDescription?: ModelSubscriptionStringInput | null,
  oversizedItems?: ModelSubscriptionBooleanInput | null,
  newConsigner?: ModelSubscriptionBooleanInput | null,
  timerCleared?: ModelSubscriptionBooleanInput | null,
  createdTime?: ModelSubscriptionStringInput | null,
  hasAppointment?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionConsignmentDropoffFilterInput | null > | null,
  or?: Array< ModelSubscriptionConsignmentDropoffFilterInput | null > | null,
};

export type ModelSubscriptionCubbyFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  cubbyNumber?: ModelSubscriptionStringInput | null,
  locationId?: ModelSubscriptionStringInput | null,
  inUse?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionCubbyFilterInput | null > | null,
  or?: Array< ModelSubscriptionCubbyFilterInput | null > | null,
};

export type ModelSubscriptionCategoryAttributeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  categoryId?: ModelSubscriptionIDInput | null,
  attributeTypeId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCategoryAttributeFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoryAttributeFilterInput | null > | null,
};

export type CreateClientMutationVariables = {
  input: CreateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type CreateClientMutation = {
  createClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type UpdateClientMutationVariables = {
  input: UpdateClientInput,
  condition?: ModelClientConditionInput | null,
};

export type UpdateClientMutation = {
  updateClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type DeleteClientMutationVariables = {
  input: DeleteClientInput,
  condition?: ModelClientConditionInput | null,
};

export type DeleteClientMutation = {
  deleteClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type CreateStoreCreditMutationVariables = {
  input: CreateStoreCreditInput,
  condition?: ModelStoreCreditConditionInput | null,
};

export type CreateStoreCreditMutation = {
  createStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateStoreCreditMutationVariables = {
  input: UpdateStoreCreditInput,
  condition?: ModelStoreCreditConditionInput | null,
};

export type UpdateStoreCreditMutation = {
  updateStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteStoreCreditMutationVariables = {
  input: DeleteStoreCreditInput,
  condition?: ModelStoreCreditConditionInput | null,
};

export type DeleteStoreCreditMutation = {
  deleteStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type CreateTransactionMutationVariables = {
  input: CreateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type CreateTransactionMutation = {
  createTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type UpdateTransactionMutationVariables = {
  input: UpdateTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type UpdateTransactionMutation = {
  updateTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type DeleteTransactionMutationVariables = {
  input: DeleteTransactionInput,
  condition?: ModelTransactionConditionInput | null,
};

export type DeleteTransactionMutation = {
  deleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type CreateTenderMutationVariables = {
  input: CreateTenderInput,
  condition?: ModelTenderConditionInput | null,
};

export type CreateTenderMutation = {
  createTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type UpdateTenderMutationVariables = {
  input: UpdateTenderInput,
  condition?: ModelTenderConditionInput | null,
};

export type UpdateTenderMutation = {
  updateTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type DeleteTenderMutationVariables = {
  input: DeleteTenderInput,
  condition?: ModelTenderConditionInput | null,
};

export type DeleteTenderMutation = {
  deleteTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type CreateLocationMutationVariables = {
  input: CreateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type CreateLocationMutation = {
  createLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type UpdateLocationMutationVariables = {
  input: UpdateLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type UpdateLocationMutation = {
  updateLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type DeleteLocationMutationVariables = {
  input: DeleteLocationInput,
  condition?: ModelLocationConditionInput | null,
};

export type DeleteLocationMutation = {
  deleteLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type CreateConsignerSplitMutationVariables = {
  input: CreateConsignerSplitInput,
  condition?: ModelConsignerSplitConditionInput | null,
};

export type CreateConsignerSplitMutation = {
  createConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateConsignerSplitMutationVariables = {
  input: UpdateConsignerSplitInput,
  condition?: ModelConsignerSplitConditionInput | null,
};

export type UpdateConsignerSplitMutation = {
  updateConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteConsignerSplitMutationVariables = {
  input: DeleteConsignerSplitInput,
  condition?: ModelConsignerSplitConditionInput | null,
};

export type DeleteConsignerSplitMutation = {
  deleteConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAddressMutationVariables = {
  input: CreateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type CreateAddressMutation = {
  createAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: UpdateAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: DeleteAddressInput,
  condition?: ModelAddressConditionInput | null,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type CreateCityMutationVariables = {
  input: CreateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type CreateCityMutation = {
  createCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCityMutationVariables = {
  input: UpdateCityInput,
  condition?: ModelCityConditionInput | null,
};

export type UpdateCityMutation = {
  updateCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCityMutationVariables = {
  input: DeleteCityInput,
  condition?: ModelCityConditionInput | null,
};

export type DeleteCityMutation = {
  deleteCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBrandMutationVariables = {
  input: CreateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type CreateBrandMutation = {
  createBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBrandMutationVariables = {
  input: UpdateBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type UpdateBrandMutation = {
  updateBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBrandMutationVariables = {
  input: DeleteBrandInput,
  condition?: ModelBrandConditionInput | null,
};

export type DeleteBrandMutation = {
  deleteBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAttributeTypeMutationVariables = {
  input: CreateAttributeTypeInput,
  condition?: ModelAttributeTypeConditionInput | null,
};

export type CreateAttributeTypeMutation = {
  createAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAttributeTypeMutationVariables = {
  input: UpdateAttributeTypeInput,
  condition?: ModelAttributeTypeConditionInput | null,
};

export type UpdateAttributeTypeMutation = {
  updateAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAttributeTypeMutationVariables = {
  input: DeleteAttributeTypeInput,
  condition?: ModelAttributeTypeConditionInput | null,
};

export type DeleteAttributeTypeMutation = {
  deleteAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAttributeTypeValueMutationVariables = {
  input: CreateAttributeTypeValueInput,
  condition?: ModelAttributeTypeValueConditionInput | null,
};

export type CreateAttributeTypeValueMutation = {
  createAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type UpdateAttributeTypeValueMutationVariables = {
  input: UpdateAttributeTypeValueInput,
  condition?: ModelAttributeTypeValueConditionInput | null,
};

export type UpdateAttributeTypeValueMutation = {
  updateAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type DeleteAttributeTypeValueMutationVariables = {
  input: DeleteAttributeTypeValueInput,
  condition?: ModelAttributeTypeValueConditionInput | null,
};

export type DeleteAttributeTypeValueMutation = {
  deleteAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type CreateCategoryPriceGuideMutationVariables = {
  input: CreateCategoryPriceGuideInput,
  condition?: ModelCategoryPriceGuideConditionInput | null,
};

export type CreateCategoryPriceGuideMutation = {
  createCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type UpdateCategoryPriceGuideMutationVariables = {
  input: UpdateCategoryPriceGuideInput,
  condition?: ModelCategoryPriceGuideConditionInput | null,
};

export type UpdateCategoryPriceGuideMutation = {
  updateCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type DeleteCategoryPriceGuideMutationVariables = {
  input: DeleteCategoryPriceGuideInput,
  condition?: ModelCategoryPriceGuideConditionInput | null,
};

export type DeleteCategoryPriceGuideMutation = {
  deleteCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type CreateGiftCardMutationVariables = {
  input: CreateGiftCardInput,
  condition?: ModelGiftCardConditionInput | null,
};

export type CreateGiftCardMutation = {
  createGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateGiftCardMutationVariables = {
  input: UpdateGiftCardInput,
  condition?: ModelGiftCardConditionInput | null,
};

export type UpdateGiftCardMutation = {
  updateGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteGiftCardMutationVariables = {
  input: DeleteGiftCardInput,
  condition?: ModelGiftCardConditionInput | null,
};

export type DeleteGiftCardMutation = {
  deleteGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateGiftCardLogMutationVariables = {
  input: CreateGiftCardLogInput,
  condition?: ModelGiftCardLogConditionInput | null,
};

export type CreateGiftCardLogMutation = {
  createGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type UpdateGiftCardLogMutationVariables = {
  input: UpdateGiftCardLogInput,
  condition?: ModelGiftCardLogConditionInput | null,
};

export type UpdateGiftCardLogMutation = {
  updateGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type DeleteGiftCardLogMutationVariables = {
  input: DeleteGiftCardLogInput,
  condition?: ModelGiftCardLogConditionInput | null,
};

export type DeleteGiftCardLogMutation = {
  deleteGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type CreateCouponMutationVariables = {
  input: CreateCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type CreateCouponMutation = {
  createCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type UpdateCouponMutationVariables = {
  input: UpdateCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type UpdateCouponMutation = {
  updateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type DeleteCouponMutationVariables = {
  input: DeleteCouponInput,
  condition?: ModelCouponConditionInput | null,
};

export type DeleteCouponMutation = {
  deleteCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type CreateConsignmentDropoffMutationVariables = {
  input: CreateConsignmentDropoffInput,
  condition?: ModelConsignmentDropoffConditionInput | null,
};

export type CreateConsignmentDropoffMutation = {
  createConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type UpdateConsignmentDropoffMutationVariables = {
  input: UpdateConsignmentDropoffInput,
  condition?: ModelConsignmentDropoffConditionInput | null,
};

export type UpdateConsignmentDropoffMutation = {
  updateConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type DeleteConsignmentDropoffMutationVariables = {
  input: DeleteConsignmentDropoffInput,
  condition?: ModelConsignmentDropoffConditionInput | null,
};

export type DeleteConsignmentDropoffMutation = {
  deleteConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type CreateCubbyMutationVariables = {
  input: CreateCubbyInput,
  condition?: ModelCubbyConditionInput | null,
};

export type CreateCubbyMutation = {
  createCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCubbyMutationVariables = {
  input: UpdateCubbyInput,
  condition?: ModelCubbyConditionInput | null,
};

export type UpdateCubbyMutation = {
  updateCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCubbyMutationVariables = {
  input: DeleteCubbyInput,
  condition?: ModelCubbyConditionInput | null,
};

export type DeleteCubbyMutation = {
  deleteCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoryAttributeMutationVariables = {
  input: CreateCategoryAttributeInput,
  condition?: ModelCategoryAttributeConditionInput | null,
};

export type CreateCategoryAttributeMutation = {
  createCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoryAttributeMutationVariables = {
  input: UpdateCategoryAttributeInput,
  condition?: ModelCategoryAttributeConditionInput | null,
};

export type UpdateCategoryAttributeMutation = {
  updateCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoryAttributeMutationVariables = {
  input: DeleteCategoryAttributeInput,
  condition?: ModelCategoryAttributeConditionInput | null,
};

export type DeleteCategoryAttributeMutation = {
  deleteCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetClientQueryVariables = {
  id: string,
};

export type GetClientQuery = {
  getClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type ListClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListClientsQuery = {
  listClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncClientsQueryVariables = {
  filter?: ModelClientFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncClientsQuery = {
  syncClients?:  {
    __typename: "ModelClientConnection",
    items:  Array< {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetStoreCreditQueryVariables = {
  id: string,
};

export type GetStoreCreditQuery = {
  getStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStoreCreditsQueryVariables = {
  filter?: ModelStoreCreditFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoreCreditsQuery = {
  listStoreCredits?:  {
    __typename: "ModelStoreCreditConnection",
    items:  Array< {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncStoreCreditsQueryVariables = {
  filter?: ModelStoreCreditFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoreCreditsQuery = {
  syncStoreCredits?:  {
    __typename: "ModelStoreCreditConnection",
    items:  Array< {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      itemId?: string | null,
      userId: string,
      userName?: string | null,
      itemAcquireTypeId?: string | null,
      category?:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      location?:  {
        __typename: "Location",
        id: string,
        locationId?: string | null,
        locationName: string,
        taxRate: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationAddressId?: string | null,
      } | null,
      sectionId?: string | null,
      statusId: string,
      taxTypeId?: string | null,
      number?: string | null,
      itemName: string,
      description?: string | null,
      receiveTimestamp?: string | null,
      donateIndicator?: boolean | null,
      price: string,
      cost?: string | null,
      qty?: number | null,
      qtyTagPrint?: number | null,
      tagPrintedTimestamp?: string | null,
      commission?: string | null,
      itemAcquisitionTypeId?: string | null,
      brand?:  {
        __typename: "Brand",
        id: string,
        brandId?: string | null,
        description: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      saleDetailId?: string | null,
      titleChanged?: boolean | null,
      modifiedBy?: string | null,
      upcCode?: string | null,
      returned?: boolean | null,
      createTimestamp?: string | null,
      entryTimestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientItemsId?: string | null,
      storeCreditItemsId: string,
      transactionItemsId: string,
      transactionMissingItemsId?: string | null,
      itemCategoryId?: string | null,
      itemLocationId?: string | null,
      itemBrandId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncItemsQuery = {
  syncItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      itemId?: string | null,
      userId: string,
      userName?: string | null,
      itemAcquireTypeId?: string | null,
      category?:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      location?:  {
        __typename: "Location",
        id: string,
        locationId?: string | null,
        locationName: string,
        taxRate: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationAddressId?: string | null,
      } | null,
      sectionId?: string | null,
      statusId: string,
      taxTypeId?: string | null,
      number?: string | null,
      itemName: string,
      description?: string | null,
      receiveTimestamp?: string | null,
      donateIndicator?: boolean | null,
      price: string,
      cost?: string | null,
      qty?: number | null,
      qtyTagPrint?: number | null,
      tagPrintedTimestamp?: string | null,
      commission?: string | null,
      itemAcquisitionTypeId?: string | null,
      brand?:  {
        __typename: "Brand",
        id: string,
        brandId?: string | null,
        description: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      saleDetailId?: string | null,
      titleChanged?: boolean | null,
      modifiedBy?: string | null,
      upcCode?: string | null,
      returned?: boolean | null,
      createTimestamp?: string | null,
      entryTimestamp?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientItemsId?: string | null,
      storeCreditItemsId: string,
      transactionItemsId: string,
      transactionMissingItemsId?: string | null,
      itemCategoryId?: string | null,
      itemLocationId?: string | null,
      itemBrandId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  id: string,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type ListTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionsQuery = {
  listTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      client?:  {
        __typename: "Client",
        id: string,
        clientId?: string | null,
        clientType?: ClientType | null,
        firstName: string,
        lastName: string,
        companyName?: string | null,
        account: string,
        receiveMailInd: boolean,
        nextItemNumber: string,
        phone?: string | null,
        email?: string | null,
        createTimestamp?: string | null,
        activeTimestamp?: string | null,
        inactiveTimestamp?: string | null,
        modifiedBy: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientCreditId?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      payoutId?: string | null,
      transCdId?: string | null,
      userId: string,
      actTransTimestamp?: string | null,
      actTransDesc?: string | null,
      actTransAmt?: string | null,
      hold?: boolean | null,
      glExportInd?: boolean | null,
      syncInd?: boolean | null,
      saleDetailId?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        locationId?: string | null,
        locationName: string,
        taxRate: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationAddressId?: string | null,
      } | null,
      tenders?:  {
        __typename: "ModelTenderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coupons?:  {
        __typename: "ModelCouponConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      missingItems?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      transactionLocationId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTransactionsQueryVariables = {
  filter?: ModelTransactionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTransactionsQuery = {
  syncTransactions?:  {
    __typename: "ModelTransactionConnection",
    items:  Array< {
      __typename: "Transaction",
      id: string,
      client?:  {
        __typename: "Client",
        id: string,
        clientId?: string | null,
        clientType?: ClientType | null,
        firstName: string,
        lastName: string,
        companyName?: string | null,
        account: string,
        receiveMailInd: boolean,
        nextItemNumber: string,
        phone?: string | null,
        email?: string | null,
        createTimestamp?: string | null,
        activeTimestamp?: string | null,
        inactiveTimestamp?: string | null,
        modifiedBy: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientCreditId?: string | null,
      } | null,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      payoutId?: string | null,
      transCdId?: string | null,
      userId: string,
      actTransTimestamp?: string | null,
      actTransDesc?: string | null,
      actTransAmt?: string | null,
      hold?: boolean | null,
      glExportInd?: boolean | null,
      syncInd?: boolean | null,
      saleDetailId?: string | null,
      location?:  {
        __typename: "Location",
        id: string,
        locationId?: string | null,
        locationName: string,
        taxRate: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        locationAddressId?: string | null,
      } | null,
      tenders?:  {
        __typename: "ModelTenderConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      coupons?:  {
        __typename: "ModelCouponConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      missingItems?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      transactionLocationId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTenderQueryVariables = {
  id: string,
};

export type GetTenderQuery = {
  getTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type ListTendersQueryVariables = {
  filter?: ModelTenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTendersQuery = {
  listTenders?:  {
    __typename: "ModelTenderConnection",
    items:  Array< {
      __typename: "Tender",
      label: TenderType,
      receivedAmount: number,
      giftCardId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      transactionTendersId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTendersQueryVariables = {
  filter?: ModelTenderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTendersQuery = {
  syncTenders?:  {
    __typename: "ModelTenderConnection",
    items:  Array< {
      __typename: "Tender",
      label: TenderType,
      receivedAmount: number,
      giftCardId?: string | null,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      transactionTendersId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLocationQueryVariables = {
  id: string,
};

export type GetLocationQuery = {
  getLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLocationsQueryVariables = {
  filter?: ModelLocationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationsQuery = {
  syncLocations?:  {
    __typename: "ModelLocationConnection",
    items:  Array< {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetConsignerSplitQueryVariables = {
  id: string,
};

export type GetConsignerSplitQuery = {
  getConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListConsignerSplitsQueryVariables = {
  filter?: ModelConsignerSplitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConsignerSplitsQuery = {
  listConsignerSplits?:  {
    __typename: "ModelConsignerSplitConnection",
    items:  Array< {
      __typename: "ConsignerSplit",
      id: string,
      consignerPercentage: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConsignerSplitsQueryVariables = {
  filter?: ModelConsignerSplitFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConsignerSplitsQuery = {
  syncConsignerSplits?:  {
    __typename: "ModelConsignerSplitConnection",
    items:  Array< {
      __typename: "ConsignerSplit",
      id: string,
      consignerPercentage: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAddressQueryVariables = {
  id: string,
};

export type GetAddressQuery = {
  getAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type ListAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAddressesQuery = {
  listAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAddressesQueryVariables = {
  filter?: ModelAddressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAddressesQuery = {
  syncAddresses?:  {
    __typename: "ModelAddressConnection",
    items:  Array< {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCityQueryVariables = {
  id: string,
};

export type GetCityQuery = {
  getCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitiesQuery = {
  listCities?:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      cityId: string,
      zip: string,
      city: string,
      state: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCitiesQueryVariables = {
  filter?: ModelCityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCitiesQuery = {
  syncCities?:  {
    __typename: "ModelCityConnection",
    items:  Array< {
      __typename: "City",
      cityId: string,
      zip: string,
      city: string,
      state: string,
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBrandQueryVariables = {
  id: string,
};

export type GetBrandQuery = {
  getBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBrandsQueryVariables = {
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBrandsQuery = {
  listBrands?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBrandsQueryVariables = {
  filter?: ModelBrandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBrandsQuery = {
  syncBrands?:  {
    __typename: "ModelBrandConnection",
    items:  Array< {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAttributeTypeQueryVariables = {
  id: string,
};

export type GetAttributeTypeQuery = {
  getAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAttributeTypesQueryVariables = {
  filter?: ModelAttributeTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttributeTypesQuery = {
  listAttributeTypes?:  {
    __typename: "ModelAttributeTypeConnection",
    items:  Array< {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAttributeTypesQueryVariables = {
  filter?: ModelAttributeTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAttributeTypesQuery = {
  syncAttributeTypes?:  {
    __typename: "ModelAttributeTypeConnection",
    items:  Array< {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetAttributeTypeValueQueryVariables = {
  id: string,
};

export type GetAttributeTypeValueQuery = {
  getAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type ListAttributeTypeValuesQueryVariables = {
  filter?: ModelAttributeTypeValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAttributeTypeValuesQuery = {
  listAttributeTypeValues?:  {
    __typename: "ModelAttributeTypeValueConnection",
    items:  Array< {
      __typename: "AttributeTypeValue",
      id: string,
      attributeType?:  {
        __typename: "AttributeType",
        id: string,
        attributeTypeId?: string | null,
        attributeTypeDescription: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      attributeTypeValueId?: string | null,
      attributeTypeValue: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      attributeTypeValueAttributeTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncAttributeTypeValuesQueryVariables = {
  filter?: ModelAttributeTypeValueFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAttributeTypeValuesQuery = {
  syncAttributeTypeValues?:  {
    __typename: "ModelAttributeTypeValueConnection",
    items:  Array< {
      __typename: "AttributeTypeValue",
      id: string,
      attributeType?:  {
        __typename: "AttributeType",
        id: string,
        attributeTypeId?: string | null,
        attributeTypeDescription: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      attributeTypeValueId?: string | null,
      attributeTypeValue: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      attributeTypeValueAttributeTypeId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryPriceGuideQueryVariables = {
  id: string,
};

export type GetCategoryPriceGuideQuery = {
  getCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type ListCategoryPriceGuidesQueryVariables = {
  filter?: ModelCategoryPriceGuideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoryPriceGuidesQuery = {
  listCategoryPriceGuides?:  {
    __typename: "ModelCategoryPriceGuideConnection",
    items:  Array< {
      __typename: "CategoryPriceGuide",
      id: string,
      category?:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      description: string,
      price?: number | null,
      priceLevel?: number | null,
      sortOrder?: number | null,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryPriceGuideCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoryPriceGuidesQueryVariables = {
  filter?: ModelCategoryPriceGuideFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoryPriceGuidesQuery = {
  syncCategoryPriceGuides?:  {
    __typename: "ModelCategoryPriceGuideConnection",
    items:  Array< {
      __typename: "CategoryPriceGuide",
      id: string,
      category?:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      description: string,
      price?: number | null,
      priceLevel?: number | null,
      sortOrder?: number | null,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      categoryPriceGuideCategoryId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGiftCardQueryVariables = {
  id: string,
};

export type GetGiftCardQuery = {
  getGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListGiftCardsQueryVariables = {
  filter?: ModelGiftCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGiftCardsQuery = {
  listGiftCards?:  {
    __typename: "ModelGiftCardConnection",
    items:  Array< {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGiftCardsQueryVariables = {
  filter?: ModelGiftCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGiftCardsQuery = {
  syncGiftCards?:  {
    __typename: "ModelGiftCardConnection",
    items:  Array< {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGiftCardLogQueryVariables = {
  id: string,
};

export type GetGiftCardLogQuery = {
  getGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type ListGiftCardLogsQueryVariables = {
  filter?: ModelGiftCardLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGiftCardLogsQuery = {
  listGiftCardLogs?:  {
    __typename: "ModelGiftCardLogConnection",
    items:  Array< {
      __typename: "GiftCardLog",
      id: string,
      giftCard:  {
        __typename: "GiftCard",
        id: string,
        qrCode?: string | null,
        barcode?: string | null,
        value: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      amount: number,
      type: GiftCardLogType,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      giftCardLogGiftCardId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGiftCardLogsQueryVariables = {
  filter?: ModelGiftCardLogFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGiftCardLogsQuery = {
  syncGiftCardLogs?:  {
    __typename: "ModelGiftCardLogConnection",
    items:  Array< {
      __typename: "GiftCardLog",
      id: string,
      giftCard:  {
        __typename: "GiftCard",
        id: string,
        qrCode?: string | null,
        barcode?: string | null,
        value: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      amount: number,
      type: GiftCardLogType,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      giftCardLogGiftCardId: string,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCouponQueryVariables = {
  id: string,
};

export type GetCouponQuery = {
  getCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type ListCouponsQueryVariables = {
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCouponsQuery = {
  listCoupons?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name: string,
      type: CouponType,
      amount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      transactionCouponsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCouponsQueryVariables = {
  filter?: ModelCouponFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCouponsQuery = {
  syncCoupons?:  {
    __typename: "ModelCouponConnection",
    items:  Array< {
      __typename: "Coupon",
      id: string,
      name: string,
      type: CouponType,
      amount: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      transactionCouponsId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetConsignmentDropoffQueryVariables = {
  id: string,
};

export type GetConsignmentDropoffQuery = {
  getConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type ListConsignmentDropoffsQueryVariables = {
  filter?: ModelConsignmentDropoffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConsignmentDropoffsQuery = {
  listConsignmentDropoffs?:  {
    __typename: "ModelConsignmentDropoffConnection",
    items:  Array< {
      __typename: "ConsignmentDropoff",
      id: string,
      firstName: string,
      lastName: string,
      phone: string,
      complete: boolean,
      showError?: boolean | null,
      errorPrompt?: string | null,
      cubby?:  {
        __typename: "Cubby",
        id: string,
        cubbyNumber: string,
        locationId: string,
        inUse: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      oversizedDescription?: string | null,
      oversizedItems?: boolean | null,
      newConsigner?: boolean | null,
      timerCleared?: boolean | null,
      createdTime: string,
      hasAppointment?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      consignmentDropoffCubbyId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncConsignmentDropoffsQueryVariables = {
  filter?: ModelConsignmentDropoffFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncConsignmentDropoffsQuery = {
  syncConsignmentDropoffs?:  {
    __typename: "ModelConsignmentDropoffConnection",
    items:  Array< {
      __typename: "ConsignmentDropoff",
      id: string,
      firstName: string,
      lastName: string,
      phone: string,
      complete: boolean,
      showError?: boolean | null,
      errorPrompt?: string | null,
      cubby?:  {
        __typename: "Cubby",
        id: string,
        cubbyNumber: string,
        locationId: string,
        inUse: boolean,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      oversizedDescription?: string | null,
      oversizedItems?: boolean | null,
      newConsigner?: boolean | null,
      timerCleared?: boolean | null,
      createdTime: string,
      hasAppointment?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      consignmentDropoffCubbyId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCubbyQueryVariables = {
  id: string,
};

export type GetCubbyQuery = {
  getCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCubbiesQueryVariables = {
  filter?: ModelCubbyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCubbiesQuery = {
  listCubbies?:  {
    __typename: "ModelCubbyConnection",
    items:  Array< {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCubbiesQueryVariables = {
  filter?: ModelCubbyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCubbiesQuery = {
  syncCubbies?:  {
    __typename: "ModelCubbyConnection",
    items:  Array< {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryAttributeQueryVariables = {
  id: string,
};

export type GetCategoryAttributeQuery = {
  getCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoryAttributesQueryVariables = {
  filter?: ModelCategoryAttributeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoryAttributesQuery = {
  listCategoryAttributes?:  {
    __typename: "ModelCategoryAttributeConnection",
    items:  Array< {
      __typename: "CategoryAttribute",
      id: string,
      categoryId: string,
      attributeTypeId: string,
      category:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      attributeType:  {
        __typename: "AttributeType",
        id: string,
        attributeTypeId?: string | null,
        attributeTypeDescription: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoryAttributesQueryVariables = {
  filter?: ModelCategoryAttributeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoryAttributesQuery = {
  syncCategoryAttributes?:  {
    __typename: "ModelCategoryAttributeConnection",
    items:  Array< {
      __typename: "CategoryAttribute",
      id: string,
      categoryId: string,
      attributeTypeId: string,
      category:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      attributeType:  {
        __typename: "AttributeType",
        id: string,
        attributeTypeId?: string | null,
        attributeTypeDescription: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CategoryAttributesByCategoryIdQueryVariables = {
  categoryId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryAttributeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoryAttributesByCategoryIdQuery = {
  categoryAttributesByCategoryId?:  {
    __typename: "ModelCategoryAttributeConnection",
    items:  Array< {
      __typename: "CategoryAttribute",
      id: string,
      categoryId: string,
      attributeTypeId: string,
      category:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      attributeType:  {
        __typename: "AttributeType",
        id: string,
        attributeTypeId?: string | null,
        attributeTypeDescription: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CategoryAttributesByAttributeTypeIdQueryVariables = {
  attributeTypeId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCategoryAttributeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CategoryAttributesByAttributeTypeIdQuery = {
  categoryAttributesByAttributeTypeId?:  {
    __typename: "ModelCategoryAttributeConnection",
    items:  Array< {
      __typename: "CategoryAttribute",
      id: string,
      categoryId: string,
      attributeTypeId: string,
      category:  {
        __typename: "Category",
        id: string,
        parent?: string | null,
        categoryId?: string | null,
        categoryName: string,
        categoryLevel: number,
        inactive?: boolean | null,
        lastUpdateTimestamp: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      attributeType:  {
        __typename: "AttributeType",
        id: string,
        attributeTypeId?: string | null,
        attributeTypeDescription: string,
        lastUpdateTimestamp: string,
        inactive?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      },
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnCreateClientSubscription = {
  onCreateClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type OnUpdateClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnUpdateClientSubscription = {
  onUpdateClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type OnDeleteClientSubscriptionVariables = {
  filter?: ModelSubscriptionClientFilterInput | null,
};

export type OnDeleteClientSubscription = {
  onDeleteClient?:  {
    __typename: "Client",
    id: string,
    clientId?: string | null,
    clientType?: ClientType | null,
    firstName: string,
    lastName: string,
    companyName?: string | null,
    account: string,
    receiveMailInd: boolean,
    nextItemNumber: string,
    phone?: string | null,
    email?: string | null,
    createTimestamp?: string | null,
    activeTimestamp?: string | null,
    inactiveTimestamp?: string | null,
    modifiedBy: string,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    addresses?:  {
      __typename: "ModelAddressConnection",
      items:  Array< {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    credit?:  {
      __typename: "StoreCredit",
      id: string,
      amount: number,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientCreditId?: string | null,
  } | null,
};

export type OnCreateStoreCreditSubscriptionVariables = {
  filter?: ModelSubscriptionStoreCreditFilterInput | null,
};

export type OnCreateStoreCreditSubscription = {
  onCreateStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateStoreCreditSubscriptionVariables = {
  filter?: ModelSubscriptionStoreCreditFilterInput | null,
};

export type OnUpdateStoreCreditSubscription = {
  onUpdateStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteStoreCreditSubscriptionVariables = {
  filter?: ModelSubscriptionStoreCreditFilterInput | null,
};

export type OnDeleteStoreCreditSubscription = {
  onDeleteStoreCredit?:  {
    __typename: "StoreCredit",
    id: string,
    amount: number,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    itemId?: string | null,
    userId: string,
    userName?: string | null,
    itemAcquireTypeId?: string | null,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    sectionId?: string | null,
    statusId: string,
    taxTypeId?: string | null,
    number?: string | null,
    itemName: string,
    description?: string | null,
    receiveTimestamp?: string | null,
    donateIndicator?: boolean | null,
    price: string,
    cost?: string | null,
    qty?: number | null,
    qtyTagPrint?: number | null,
    tagPrintedTimestamp?: string | null,
    commission?: string | null,
    itemAcquisitionTypeId?: string | null,
    brand?:  {
      __typename: "Brand",
      id: string,
      brandId?: string | null,
      description: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    saleDetailId?: string | null,
    titleChanged?: boolean | null,
    modifiedBy?: string | null,
    upcCode?: string | null,
    returned?: boolean | null,
    createTimestamp?: string | null,
    entryTimestamp?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientItemsId?: string | null,
    storeCreditItemsId: string,
    transactionItemsId: string,
    transactionMissingItemsId?: string | null,
    itemCategoryId?: string | null,
    itemLocationId?: string | null,
    itemBrandId?: string | null,
  } | null,
};

export type OnCreateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnCreateTransactionSubscription = {
  onCreateTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type OnUpdateTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnUpdateTransactionSubscription = {
  onUpdateTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type OnDeleteTransactionSubscriptionVariables = {
  filter?: ModelSubscriptionTransactionFilterInput | null,
};

export type OnDeleteTransactionSubscription = {
  onDeleteTransaction?:  {
    __typename: "Transaction",
    id: string,
    client?:  {
      __typename: "Client",
      id: string,
      clientId?: string | null,
      clientType?: ClientType | null,
      firstName: string,
      lastName: string,
      companyName?: string | null,
      account: string,
      receiveMailInd: boolean,
      nextItemNumber: string,
      phone?: string | null,
      email?: string | null,
      createTimestamp?: string | null,
      activeTimestamp?: string | null,
      inactiveTimestamp?: string | null,
      modifiedBy: string,
      items?:  {
        __typename: "ModelItemConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      addresses?:  {
        __typename: "ModelAddressConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      credit?:  {
        __typename: "StoreCredit",
        id: string,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientCreditId?: string | null,
    } | null,
    items?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    payoutId?: string | null,
    transCdId?: string | null,
    userId: string,
    actTransTimestamp?: string | null,
    actTransDesc?: string | null,
    actTransAmt?: string | null,
    hold?: boolean | null,
    glExportInd?: boolean | null,
    syncInd?: boolean | null,
    saleDetailId?: string | null,
    location?:  {
      __typename: "Location",
      id: string,
      locationId?: string | null,
      locationName: string,
      address?:  {
        __typename: "Address",
        id: string,
        addressId?: string | null,
        addressLabel?: string | null,
        label?: string | null,
        address1?: string | null,
        address2?: string | null,
        address3?: string | null,
        city?: string | null,
        state?: string | null,
        zip?: string | null,
        primary?: boolean | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientAddressesId?: string | null,
      } | null,
      taxRate: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      locationAddressId?: string | null,
    } | null,
    tenders?:  {
      __typename: "ModelTenderConnection",
      items:  Array< {
        __typename: "Tender",
        label: TenderType,
        receivedAmount: number,
        giftCardId?: string | null,
        id: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionTendersId: string,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    coupons?:  {
      __typename: "ModelCouponConnection",
      items:  Array< {
        __typename: "Coupon",
        id: string,
        name: string,
        type: CouponType,
        amount: number,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        transactionCouponsId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    missingItems?:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        itemId?: string | null,
        userId: string,
        userName?: string | null,
        itemAcquireTypeId?: string | null,
        sectionId?: string | null,
        statusId: string,
        taxTypeId?: string | null,
        number?: string | null,
        itemName: string,
        description?: string | null,
        receiveTimestamp?: string | null,
        donateIndicator?: boolean | null,
        price: string,
        cost?: string | null,
        qty?: number | null,
        qtyTagPrint?: number | null,
        tagPrintedTimestamp?: string | null,
        commission?: string | null,
        itemAcquisitionTypeId?: string | null,
        saleDetailId?: string | null,
        titleChanged?: boolean | null,
        modifiedBy?: string | null,
        upcCode?: string | null,
        returned?: boolean | null,
        createTimestamp?: string | null,
        entryTimestamp?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        clientItemsId?: string | null,
        storeCreditItemsId: string,
        transactionItemsId: string,
        transactionMissingItemsId?: string | null,
        itemCategoryId?: string | null,
        itemLocationId?: string | null,
        itemBrandId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionLocationId?: string | null,
  } | null,
};

export type OnCreateTenderSubscriptionVariables = {
  filter?: ModelSubscriptionTenderFilterInput | null,
};

export type OnCreateTenderSubscription = {
  onCreateTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type OnUpdateTenderSubscriptionVariables = {
  filter?: ModelSubscriptionTenderFilterInput | null,
};

export type OnUpdateTenderSubscription = {
  onUpdateTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type OnDeleteTenderSubscriptionVariables = {
  filter?: ModelSubscriptionTenderFilterInput | null,
};

export type OnDeleteTenderSubscription = {
  onDeleteTender?:  {
    __typename: "Tender",
    label: TenderType,
    receivedAmount: number,
    giftCardId?: string | null,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionTendersId: string,
  } | null,
};

export type OnCreateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnCreateLocationSubscription = {
  onCreateLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type OnUpdateLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnUpdateLocationSubscription = {
  onUpdateLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type OnDeleteLocationSubscriptionVariables = {
  filter?: ModelSubscriptionLocationFilterInput | null,
};

export type OnDeleteLocationSubscription = {
  onDeleteLocation?:  {
    __typename: "Location",
    id: string,
    locationId?: string | null,
    locationName: string,
    address?:  {
      __typename: "Address",
      id: string,
      addressId?: string | null,
      addressLabel?: string | null,
      label?: string | null,
      address1?: string | null,
      address2?: string | null,
      address3?: string | null,
      city?: string | null,
      state?: string | null,
      zip?: string | null,
      primary?: boolean | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      clientAddressesId?: string | null,
    } | null,
    taxRate: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    locationAddressId?: string | null,
  } | null,
};

export type OnCreateConsignerSplitSubscriptionVariables = {
  filter?: ModelSubscriptionConsignerSplitFilterInput | null,
};

export type OnCreateConsignerSplitSubscription = {
  onCreateConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateConsignerSplitSubscriptionVariables = {
  filter?: ModelSubscriptionConsignerSplitFilterInput | null,
};

export type OnUpdateConsignerSplitSubscription = {
  onUpdateConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteConsignerSplitSubscriptionVariables = {
  filter?: ModelSubscriptionConsignerSplitFilterInput | null,
};

export type OnDeleteConsignerSplitSubscription = {
  onDeleteConsignerSplit?:  {
    __typename: "ConsignerSplit",
    id: string,
    consignerPercentage: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnCreateAddressSubscription = {
  onCreateAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type OnUpdateAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnUpdateAddressSubscription = {
  onUpdateAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type OnDeleteAddressSubscriptionVariables = {
  filter?: ModelSubscriptionAddressFilterInput | null,
};

export type OnDeleteAddressSubscription = {
  onDeleteAddress?:  {
    __typename: "Address",
    id: string,
    addressId?: string | null,
    addressLabel?: string | null,
    label?: string | null,
    address1?: string | null,
    address2?: string | null,
    address3?: string | null,
    city?: string | null,
    state?: string | null,
    zip?: string | null,
    primary?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    clientAddressesId?: string | null,
  } | null,
};

export type OnCreateCitySubscriptionVariables = {
  filter?: ModelSubscriptionCityFilterInput | null,
};

export type OnCreateCitySubscription = {
  onCreateCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCitySubscriptionVariables = {
  filter?: ModelSubscriptionCityFilterInput | null,
};

export type OnUpdateCitySubscription = {
  onUpdateCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCitySubscriptionVariables = {
  filter?: ModelSubscriptionCityFilterInput | null,
};

export type OnDeleteCitySubscription = {
  onDeleteCity?:  {
    __typename: "City",
    cityId: string,
    zip: string,
    city: string,
    state: string,
    id: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBrandSubscriptionVariables = {
  filter?: ModelSubscriptionBrandFilterInput | null,
};

export type OnCreateBrandSubscription = {
  onCreateBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBrandSubscriptionVariables = {
  filter?: ModelSubscriptionBrandFilterInput | null,
};

export type OnUpdateBrandSubscription = {
  onUpdateBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBrandSubscriptionVariables = {
  filter?: ModelSubscriptionBrandFilterInput | null,
};

export type OnDeleteBrandSubscription = {
  onDeleteBrand?:  {
    __typename: "Brand",
    id: string,
    brandId?: string | null,
    description: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  filter?: ModelSubscriptionCategoryFilterInput | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    parent?: string | null,
    categoryId?: string | null,
    categoryName: string,
    categoryLevel: number,
    inactive?: boolean | null,
    lastUpdateTimestamp: string,
    attributeTypes?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAttributeTypeSubscriptionVariables = {
  filter?: ModelSubscriptionAttributeTypeFilterInput | null,
};

export type OnCreateAttributeTypeSubscription = {
  onCreateAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAttributeTypeSubscriptionVariables = {
  filter?: ModelSubscriptionAttributeTypeFilterInput | null,
};

export type OnUpdateAttributeTypeSubscription = {
  onUpdateAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAttributeTypeSubscriptionVariables = {
  filter?: ModelSubscriptionAttributeTypeFilterInput | null,
};

export type OnDeleteAttributeTypeSubscription = {
  onDeleteAttributeType?:  {
    __typename: "AttributeType",
    id: string,
    attributeTypeId?: string | null,
    attributeTypeDescription: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    categories?:  {
      __typename: "ModelCategoryAttributeConnection",
      items:  Array< {
        __typename: "CategoryAttribute",
        id: string,
        categoryId: string,
        attributeTypeId: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAttributeTypeValueSubscriptionVariables = {
  filter?: ModelSubscriptionAttributeTypeValueFilterInput | null,
};

export type OnCreateAttributeTypeValueSubscription = {
  onCreateAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type OnUpdateAttributeTypeValueSubscriptionVariables = {
  filter?: ModelSubscriptionAttributeTypeValueFilterInput | null,
};

export type OnUpdateAttributeTypeValueSubscription = {
  onUpdateAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type OnDeleteAttributeTypeValueSubscriptionVariables = {
  filter?: ModelSubscriptionAttributeTypeValueFilterInput | null,
};

export type OnDeleteAttributeTypeValueSubscription = {
  onDeleteAttributeTypeValue?:  {
    __typename: "AttributeTypeValue",
    id: string,
    attributeType?:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    attributeTypeValueId?: string | null,
    attributeTypeValue: string,
    lastUpdateTimestamp: string,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    attributeTypeValueAttributeTypeId?: string | null,
  } | null,
};

export type OnCreateCategoryPriceGuideSubscriptionVariables = {
  filter?: ModelSubscriptionCategoryPriceGuideFilterInput | null,
};

export type OnCreateCategoryPriceGuideSubscription = {
  onCreateCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type OnUpdateCategoryPriceGuideSubscriptionVariables = {
  filter?: ModelSubscriptionCategoryPriceGuideFilterInput | null,
};

export type OnUpdateCategoryPriceGuideSubscription = {
  onUpdateCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type OnDeleteCategoryPriceGuideSubscriptionVariables = {
  filter?: ModelSubscriptionCategoryPriceGuideFilterInput | null,
};

export type OnDeleteCategoryPriceGuideSubscription = {
  onDeleteCategoryPriceGuide?:  {
    __typename: "CategoryPriceGuide",
    id: string,
    category?:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    description: string,
    price?: number | null,
    priceLevel?: number | null,
    sortOrder?: number | null,
    inactive?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    categoryPriceGuideCategoryId?: string | null,
  } | null,
};

export type OnCreateGiftCardSubscriptionVariables = {
  filter?: ModelSubscriptionGiftCardFilterInput | null,
};

export type OnCreateGiftCardSubscription = {
  onCreateGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateGiftCardSubscriptionVariables = {
  filter?: ModelSubscriptionGiftCardFilterInput | null,
};

export type OnUpdateGiftCardSubscription = {
  onUpdateGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteGiftCardSubscriptionVariables = {
  filter?: ModelSubscriptionGiftCardFilterInput | null,
};

export type OnDeleteGiftCardSubscription = {
  onDeleteGiftCard?:  {
    __typename: "GiftCard",
    id: string,
    qrCode?: string | null,
    barcode?: string | null,
    value: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateGiftCardLogSubscriptionVariables = {
  filter?: ModelSubscriptionGiftCardLogFilterInput | null,
};

export type OnCreateGiftCardLogSubscription = {
  onCreateGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type OnUpdateGiftCardLogSubscriptionVariables = {
  filter?: ModelSubscriptionGiftCardLogFilterInput | null,
};

export type OnUpdateGiftCardLogSubscription = {
  onUpdateGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type OnDeleteGiftCardLogSubscriptionVariables = {
  filter?: ModelSubscriptionGiftCardLogFilterInput | null,
};

export type OnDeleteGiftCardLogSubscription = {
  onDeleteGiftCardLog?:  {
    __typename: "GiftCardLog",
    id: string,
    giftCard:  {
      __typename: "GiftCard",
      id: string,
      qrCode?: string | null,
      barcode?: string | null,
      value: number,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    amount: number,
    type: GiftCardLogType,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    giftCardLogGiftCardId: string,
  } | null,
};

export type OnCreateCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnCreateCouponSubscription = {
  onCreateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type OnUpdateCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnUpdateCouponSubscription = {
  onUpdateCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type OnDeleteCouponSubscriptionVariables = {
  filter?: ModelSubscriptionCouponFilterInput | null,
};

export type OnDeleteCouponSubscription = {
  onDeleteCoupon?:  {
    __typename: "Coupon",
    id: string,
    name: string,
    type: CouponType,
    amount: number,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    transactionCouponsId?: string | null,
  } | null,
};

export type OnCreateConsignmentDropoffSubscriptionVariables = {
  filter?: ModelSubscriptionConsignmentDropoffFilterInput | null,
};

export type OnCreateConsignmentDropoffSubscription = {
  onCreateConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type OnUpdateConsignmentDropoffSubscriptionVariables = {
  filter?: ModelSubscriptionConsignmentDropoffFilterInput | null,
};

export type OnUpdateConsignmentDropoffSubscription = {
  onUpdateConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type OnDeleteConsignmentDropoffSubscriptionVariables = {
  filter?: ModelSubscriptionConsignmentDropoffFilterInput | null,
};

export type OnDeleteConsignmentDropoffSubscription = {
  onDeleteConsignmentDropoff?:  {
    __typename: "ConsignmentDropoff",
    id: string,
    firstName: string,
    lastName: string,
    phone: string,
    complete: boolean,
    showError?: boolean | null,
    errorPrompt?: string | null,
    cubby?:  {
      __typename: "Cubby",
      id: string,
      cubbyNumber: string,
      locationId: string,
      inUse: boolean,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    oversizedDescription?: string | null,
    oversizedItems?: boolean | null,
    newConsigner?: boolean | null,
    timerCleared?: boolean | null,
    createdTime: string,
    hasAppointment?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    consignmentDropoffCubbyId?: string | null,
  } | null,
};

export type OnCreateCubbySubscriptionVariables = {
  filter?: ModelSubscriptionCubbyFilterInput | null,
};

export type OnCreateCubbySubscription = {
  onCreateCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCubbySubscriptionVariables = {
  filter?: ModelSubscriptionCubbyFilterInput | null,
};

export type OnUpdateCubbySubscription = {
  onUpdateCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCubbySubscriptionVariables = {
  filter?: ModelSubscriptionCubbyFilterInput | null,
};

export type OnDeleteCubbySubscription = {
  onDeleteCubby?:  {
    __typename: "Cubby",
    id: string,
    cubbyNumber: string,
    locationId: string,
    inUse: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategoryAttributeSubscriptionVariables = {
  filter?: ModelSubscriptionCategoryAttributeFilterInput | null,
};

export type OnCreateCategoryAttributeSubscription = {
  onCreateCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategoryAttributeSubscriptionVariables = {
  filter?: ModelSubscriptionCategoryAttributeFilterInput | null,
};

export type OnUpdateCategoryAttributeSubscription = {
  onUpdateCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategoryAttributeSubscriptionVariables = {
  filter?: ModelSubscriptionCategoryAttributeFilterInput | null,
};

export type OnDeleteCategoryAttributeSubscription = {
  onDeleteCategoryAttribute?:  {
    __typename: "CategoryAttribute",
    id: string,
    categoryId: string,
    attributeTypeId: string,
    category:  {
      __typename: "Category",
      id: string,
      parent?: string | null,
      categoryId?: string | null,
      categoryName: string,
      categoryLevel: number,
      inactive?: boolean | null,
      lastUpdateTimestamp: string,
      attributeTypes?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    attributeType:  {
      __typename: "AttributeType",
      id: string,
      attributeTypeId?: string | null,
      attributeTypeDescription: string,
      lastUpdateTimestamp: string,
      inactive?: boolean | null,
      categories?:  {
        __typename: "ModelCategoryAttributeConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
