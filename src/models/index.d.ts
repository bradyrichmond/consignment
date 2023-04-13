import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum ClientType {
  CLIENT = "CLIENT",
  RETAIL_VENDOR = "RETAIL_VENDOR",
  STORE_ACCOUNT = "STORE_ACCOUNT"
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Client = LazyLoading extends LazyLoadingDisabled ? EagerClient : LazyClient

export declare const Client: (new (init: ModelInit<Client>) => Client) & {
  copyOf(source: Client, mutator: (draft: MutableModel<Client>) => MutableModel<Client> | void): Client;
}

type EagerItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId?: string | null;
  readonly userId: string;
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
  readonly createTimestamp?: string | null;
  readonly entryTimestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
  readonly itemCategoryId?: string | null;
  readonly itemLocationId?: string | null;
  readonly itemBrandId?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId?: string | null;
  readonly userId: string;
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
  readonly createTimestamp?: string | null;
  readonly entryTimestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
  readonly itemCategoryId?: string | null;
  readonly itemLocationId?: string | null;
  readonly itemBrandId?: string | null;
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
  readonly clientTransId: string;
  readonly itemId: string;
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
  readonly clientTransId: string;
  readonly itemId: string;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionLocationId?: string | null;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationAddressId?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
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

type EagerPriceGuide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PriceGuide, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryPriceGuideId: string;
  readonly category: Category;
  readonly price: string;
  readonly priceLevel: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly priceGuideCategoryId: string;
}

type LazyPriceGuide = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PriceGuide, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryPriceGuideId: string;
  readonly category: AsyncItem<Category>;
  readonly price: string;
  readonly priceLevel: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly priceGuideCategoryId: string;
}

export declare type PriceGuide = LazyLoading extends LazyLoadingDisabled ? EagerPriceGuide : LazyPriceGuide

export declare const PriceGuide: (new (init: ModelInit<PriceGuide>) => PriceGuide) & {
  copyOf(source: PriceGuide, mutator: (draft: MutableModel<PriceGuide>) => MutableModel<PriceGuide> | void): PriceGuide;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

type EagerCategoryAttribute = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryAttribute, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryAttributeId?: string | null;
  readonly category?: Category | null;
  readonly attributeType: AttributeType;
  readonly required: boolean;
  readonly categoryAttributeName: string;
  readonly userDefinedIndicator?: string | null;
  readonly active?: boolean | null;
  readonly priority?: string | null;
  readonly lastUpdateTimestamp: string;
  readonly titleIndicator: boolean;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryAttributeCategoryId?: string | null;
  readonly categoryAttributeAttributeTypeId: string;
}

type LazyCategoryAttribute = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CategoryAttribute, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryAttributeId?: string | null;
  readonly category: AsyncItem<Category | undefined>;
  readonly attributeType: AsyncItem<AttributeType>;
  readonly required: boolean;
  readonly categoryAttributeName: string;
  readonly userDefinedIndicator?: string | null;
  readonly active?: boolean | null;
  readonly priority?: string | null;
  readonly lastUpdateTimestamp: string;
  readonly titleIndicator: boolean;
  readonly inactive?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryAttributeCategoryId?: string | null;
  readonly categoryAttributeAttributeTypeId: string;
}

export declare type CategoryAttribute = LazyLoading extends LazyLoadingDisabled ? EagerCategoryAttribute : LazyCategoryAttribute

export declare const CategoryAttribute: (new (init: ModelInit<CategoryAttribute>) => CategoryAttribute) & {
  copyOf(source: CategoryAttribute, mutator: (draft: MutableModel<CategoryAttribute>) => MutableModel<CategoryAttribute> | void): CategoryAttribute;
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