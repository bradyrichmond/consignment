import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ClientType {
  CLIENT = "CLIENT",
  RETAIL_VENDOR = "RETAIL_VENDOR",
  STORE_ACCOUNT = "STORE_ACCOUNT"
}

export enum GiftCardLogType {
  ISSUED = "ISSUED",
  PURCHASE = "PURCHASE"
}

export enum TenderType {
  CASH = "CASH",
  CREDIT_CARD = "CREDIT_CARD",
  GIFT_CARD = "GIFT_CARD",
  STORE_CREDIT = "STORE_CREDIT",
  TAX = "TAX"
}



type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId?: string | null;
  readonly clientType?: ClientType | keyof typeof ClientType | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly companyName?: string | null;
  readonly account: string;
  readonly receiveMailInd: boolean;
  readonly nextItemNumber: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly createTimestamp?: string | null;
  readonly activeTimestamp?: string | null;
  readonly inactiveTimestamp?: string | null;
  readonly modifiedBy: string;
  readonly items?: (Item | null)[] | null;
  readonly addresses?: (Address | null)[] | null;
  readonly credit?: StoreCredit | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientCreditId?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId?: string | null;
  readonly clientType?: ClientType | keyof typeof ClientType | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly companyName?: string | null;
  readonly account: string;
  readonly receiveMailInd: boolean;
  readonly nextItemNumber: string;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly createTimestamp?: string | null;
  readonly activeTimestamp?: string | null;
  readonly inactiveTimestamp?: string | null;
  readonly modifiedBy: string;
  readonly items: AsyncCollection<Item>;
  readonly addresses: AsyncCollection<Address>;
  readonly credit: AsyncItem<StoreCredit | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientCreditId?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerStoreCredit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoreCredit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly items: Item[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStoreCredit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoreCredit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly items: AsyncCollection<Item>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type StoreCredit = LazyLoading extends LazyLoadingDisabled ? EagerStoreCredit : LazyStoreCredit

export declare const StoreCredit: (new (init: ModelInit<StoreCredit>) => StoreCredit) & {
  copyOf(source: StoreCredit, mutator: (draft: MutableModel<StoreCredit>) => MutableModel<StoreCredit> | void): StoreCredit;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId?: string | null;
  readonly userId: string;
  readonly userName?: string | null;
  readonly itemAcquireTypeId?: string | null;
  readonly category?: Category | null;
  readonly location?: Location | null;
  readonly sectionId?: string | null;
  readonly statusId: string;
  readonly taxTypeId?: string | null;
  readonly number?: string | null;
  readonly itemName: string;
  readonly description?: string | null;
  readonly receiveTimestamp?: string | null;
  readonly donateIndicator?: boolean | null;
  readonly price: string;
  readonly cost?: string | null;
  readonly qty?: number | null;
  readonly qtyTagPrint?: number | null;
  readonly tagPrintedTimestamp?: string | null;
  readonly commission?: string | null;
  readonly itemAcquisitionTypeId?: string | null;
  readonly brand?: Brand | null;
  readonly saleDetailId?: string | null;
  readonly titleChanged?: boolean | null;
  readonly modifiedBy?: string | null;
  readonly upcCode?: string | null;
  readonly returned?: boolean | null;
  readonly createTimestamp?: string | null;
  readonly entryTimestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
  readonly storeCreditItemsId?: string | null;
  readonly itemCategoryId?: string | null;
  readonly itemLocationId?: string | null;
  readonly itemBrandId?: string | null;
  readonly transactionItemsId?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId?: string | null;
  readonly userId: string;
  readonly userName?: string | null;
  readonly itemAcquireTypeId?: string | null;
  readonly category: AsyncItem<Category | undefined>;
  readonly location: AsyncItem<Location | undefined>;
  readonly sectionId?: string | null;
  readonly statusId: string;
  readonly taxTypeId?: string | null;
  readonly number?: string | null;
  readonly itemName: string;
  readonly description?: string | null;
  readonly receiveTimestamp?: string | null;
  readonly donateIndicator?: boolean | null;
  readonly price: string;
  readonly cost?: string | null;
  readonly qty?: number | null;
  readonly qtyTagPrint?: number | null;
  readonly tagPrintedTimestamp?: string | null;
  readonly commission?: string | null;
  readonly itemAcquisitionTypeId?: string | null;
  readonly brand: AsyncItem<Brand | undefined>;
  readonly saleDetailId?: string | null;
  readonly titleChanged?: boolean | null;
  readonly modifiedBy?: string | null;
  readonly upcCode?: string | null;
  readonly returned?: boolean | null;
  readonly createTimestamp?: string | null;
  readonly entryTimestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
  readonly storeCreditItemsId?: string | null;
  readonly itemCategoryId?: string | null;
  readonly itemLocationId?: string | null;
  readonly itemBrandId?: string | null;
  readonly transactionItemsId?: string | null;
}

export declare type Item = LazyLoading extends LazyLoadingDisabled ? EagerItem : LazyItem

export declare const Item: (new (init: ModelInit<Item>) => Item) & {
  copyOf(source: Item, mutator: (draft: MutableModel<Item>) => MutableModel<Item> | void): Item;
}

type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: Item[];
  readonly payoutId?: string | null;
  readonly transCdId?: string | null;
  readonly userId: string;
  readonly actTransTimestamp?: string | null;
  readonly actTransDesc?: string | null;
  readonly actTransAmt?: string | null;
  readonly hold?: boolean | null;
  readonly glExportInd?: boolean | null;
  readonly syncInd?: boolean | null;
  readonly saleDetailId?: string | null;
  readonly location?: Location | null;
  readonly tenders: Tender[];
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionLocationId?: string | null;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: AsyncCollection<Item>;
  readonly payoutId?: string | null;
  readonly transCdId?: string | null;
  readonly userId: string;
  readonly actTransTimestamp?: string | null;
  readonly actTransDesc?: string | null;
  readonly actTransAmt?: string | null;
  readonly hold?: boolean | null;
  readonly glExportInd?: boolean | null;
  readonly syncInd?: boolean | null;
  readonly saleDetailId?: string | null;
  readonly location: AsyncItem<Location | undefined>;
  readonly tenders: AsyncCollection<Tender>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionLocationId?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerTender = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tender, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: TenderType | keyof typeof TenderType;
  readonly receivedAmount: number;
  readonly giftCardId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionTendersId?: string | null;
}

type LazyTender = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Tender, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly label: TenderType | keyof typeof TenderType;
  readonly receivedAmount: number;
  readonly giftCardId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionTendersId?: string | null;
}

export declare type Tender = LazyLoading extends LazyLoadingDisabled ? EagerTender : LazyTender

export declare const Tender: (new (init: ModelInit<Tender>) => Tender) & {
  copyOf(source: Tender, mutator: (draft: MutableModel<Tender>) => MutableModel<Tender> | void): Tender;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locationId?: string | null;
  readonly locationName: string;
  readonly address?: Address | null;
  readonly taxRate: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationAddressId?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locationId?: string | null;
  readonly locationName: string;
  readonly address: AsyncItem<Address | undefined>;
  readonly taxRate: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationAddressId?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerConsignerSplit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsignerSplit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consignerPercentage: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyConsignerSplit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsignerSplit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consignerPercentage: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ConsignerSplit = LazyLoading extends LazyLoadingDisabled ? EagerConsignerSplit : LazyConsignerSplit

export declare const ConsignerSplit: (new (init: ModelInit<ConsignerSplit>) => ConsignerSplit) & {
  copyOf(source: ConsignerSplit, mutator: (draft: MutableModel<ConsignerSplit>) => MutableModel<ConsignerSplit> | void): ConsignerSplit;
}

type EagerAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly addressId?: string | null;
  readonly addressLabel?: string | null;
  readonly label?: string | null;
  readonly address1?: string | null;
  readonly address2?: string | null;
  readonly address3?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly primary?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientAddressesId?: string | null;
}

type LazyAddress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Address, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly addressId?: string | null;
  readonly addressLabel?: string | null;
  readonly label?: string | null;
  readonly address1?: string | null;
  readonly address2?: string | null;
  readonly address3?: string | null;
  readonly city?: string | null;
  readonly state?: string | null;
  readonly zip?: string | null;
  readonly primary?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientAddressesId?: string | null;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address) & {
  copyOf(source: Address, mutator: (draft: MutableModel<Address>) => MutableModel<Address> | void): Address;
}

type EagerCity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<City, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cityId: string;
  readonly zip: string;
  readonly city: string;
  readonly state: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCity = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<City, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cityId: string;
  readonly zip: string;
  readonly city: string;
  readonly state: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type City = LazyLoading extends LazyLoadingDisabled ? EagerCity : LazyCity

export declare const City: (new (init: ModelInit<City>) => City) & {
  copyOf(source: City, mutator: (draft: MutableModel<City>) => MutableModel<City> | void): City;
}

type EagerBrand = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Brand, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly brandId?: string | null;
  readonly description: string;
  readonly lastUpdateTimestamp: string;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBrand = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Brand, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly brandId?: string | null;
  readonly description: string;
  readonly lastUpdateTimestamp: string;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Brand = LazyLoading extends LazyLoadingDisabled ? EagerBrand : LazyBrand

export declare const Brand: (new (init: ModelInit<Brand>) => Brand) & {
  copyOf(source: Brand, mutator: (draft: MutableModel<Brand>) => MutableModel<Brand> | void): Brand;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parent?: string | null;
  readonly categoryId?: string | null;
  readonly categoryName: string;
  readonly categoryLevel: number;
  readonly inactive?: boolean | null;
  readonly lastUpdateTimestamp: string;
  readonly attributeTypes?: (CategoryAttribute | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly parent?: string | null;
  readonly categoryId?: string | null;
  readonly categoryName: string;
  readonly categoryLevel: number;
  readonly inactive?: boolean | null;
  readonly lastUpdateTimestamp: string;
  readonly attributeTypes: AsyncCollection<CategoryAttribute>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerAttributeType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttributeType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attributeTypeId?: string | null;
  readonly attributeTypeDescription: string;
  readonly lastUpdateTimestamp: string;
  readonly inactive?: boolean | null;
  readonly categories?: (CategoryAttribute | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAttributeType = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttributeType, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attributeTypeId?: string | null;
  readonly attributeTypeDescription: string;
  readonly lastUpdateTimestamp: string;
  readonly inactive?: boolean | null;
  readonly categories: AsyncCollection<CategoryAttribute>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AttributeType = LazyLoading extends LazyLoadingDisabled ? EagerAttributeType : LazyAttributeType

export declare const AttributeType: (new (init: ModelInit<AttributeType>) => AttributeType) & {
  copyOf(source: AttributeType, mutator: (draft: MutableModel<AttributeType>) => MutableModel<AttributeType> | void): AttributeType;
}

type EagerAttributeTypeValue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttributeTypeValue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attributeType?: AttributeType | null;
  readonly attributeTypeValueId?: string | null;
  readonly attributeTypeValue: string;
  readonly lastUpdateTimestamp: string;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly attributeTypeValueAttributeTypeId?: string | null;
}

type LazyAttributeTypeValue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AttributeTypeValue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly attributeType: AsyncItem<AttributeType | undefined>;
  readonly attributeTypeValueId?: string | null;
  readonly attributeTypeValue: string;
  readonly lastUpdateTimestamp: string;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly attributeTypeValueAttributeTypeId?: string | null;
}

export declare type AttributeTypeValue = LazyLoading extends LazyLoadingDisabled ? EagerAttributeTypeValue : LazyAttributeTypeValue

export declare const AttributeTypeValue: (new (init: ModelInit<AttributeTypeValue>) => AttributeTypeValue) & {
  copyOf(source: AttributeTypeValue, mutator: (draft: MutableModel<AttributeTypeValue>) => MutableModel<AttributeTypeValue> | void): AttributeTypeValue;
}

type EagerCategoryPriceGuide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryPriceGuide, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category?: Category | null;
  readonly description: string;
  readonly price?: number | null;
  readonly priceLevel?: number | null;
  readonly sortOrder?: number | null;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryPriceGuideCategoryId?: string | null;
}

type LazyCategoryPriceGuide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryPriceGuide, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly category: AsyncItem<Category | undefined>;
  readonly description: string;
  readonly price?: number | null;
  readonly priceLevel?: number | null;
  readonly sortOrder?: number | null;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryPriceGuideCategoryId?: string | null;
}

export declare type CategoryPriceGuide = LazyLoading extends LazyLoadingDisabled ? EagerCategoryPriceGuide : LazyCategoryPriceGuide

export declare const CategoryPriceGuide: (new (init: ModelInit<CategoryPriceGuide>) => CategoryPriceGuide) & {
  copyOf(source: CategoryPriceGuide, mutator: (draft: MutableModel<CategoryPriceGuide>) => MutableModel<CategoryPriceGuide> | void): CategoryPriceGuide;
}

type EagerGiftCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GiftCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly qrCode?: string | null;
  readonly barcode?: string | null;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGiftCard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GiftCard, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly qrCode?: string | null;
  readonly barcode?: string | null;
  readonly value: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type GiftCard = LazyLoading extends LazyLoadingDisabled ? EagerGiftCard : LazyGiftCard

export declare const GiftCard: (new (init: ModelInit<GiftCard>) => GiftCard) & {
  copyOf(source: GiftCard, mutator: (draft: MutableModel<GiftCard>) => MutableModel<GiftCard> | void): GiftCard;
}

type EagerGiftCardLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GiftCardLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly giftCard: GiftCard;
  readonly amount: number;
  readonly type: GiftCardLogType | keyof typeof GiftCardLogType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly giftCardLogGiftCardId: string;
}

type LazyGiftCardLog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<GiftCardLog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly giftCard: AsyncItem<GiftCard>;
  readonly amount: number;
  readonly type: GiftCardLogType | keyof typeof GiftCardLogType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly giftCardLogGiftCardId: string;
}

export declare type GiftCardLog = LazyLoading extends LazyLoadingDisabled ? EagerGiftCardLog : LazyGiftCardLog

export declare const GiftCardLog: (new (init: ModelInit<GiftCardLog>) => GiftCardLog) & {
  copyOf(source: GiftCardLog, mutator: (draft: MutableModel<GiftCardLog>) => MutableModel<GiftCardLog> | void): GiftCardLog;
}

type EagerCategoryAttribute = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryAttribute, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId?: string | null;
  readonly attributeTypeId?: string | null;
  readonly category: Category;
  readonly attributeType: AttributeType;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategoryAttribute = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryAttribute, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId?: string | null;
  readonly attributeTypeId?: string | null;
  readonly category: AsyncItem<Category>;
  readonly attributeType: AsyncItem<AttributeType>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CategoryAttribute = LazyLoading extends LazyLoadingDisabled ? EagerCategoryAttribute : LazyCategoryAttribute

export declare const CategoryAttribute: (new (init: ModelInit<CategoryAttribute>) => CategoryAttribute) & {
  copyOf(source: CategoryAttribute, mutator: (draft: MutableModel<CategoryAttribute>) => MutableModel<CategoryAttribute> | void): CategoryAttribute;
}