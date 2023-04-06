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
  readonly itemId: string;
  readonly userId: string;
  readonly itemAcquireTypeId: string;
  readonly categoryId: string;
  readonly locationId: string;
  readonly sectionId: string;
  readonly statusId: string;
  readonly taxTypeId: string;
  readonly number: string;
  readonly itemName: string;
  readonly description: string;
  readonly receiveTimestamp: string;
  readonly donateIndicator?: boolean | null;
  readonly price: string;
  readonly cost?: string | null;
  readonly qty?: number | null;
  readonly qtyTagPrint?: number | null;
  readonly tagPrintedTimestamp: string;
  readonly commission: string;
  readonly itemAcquisitionTypeId: string;
  readonly brandId: string;
  readonly saleDetailId: string;
  readonly titleChanged?: boolean | null;
  readonly modifiedTimestamp: string;
  readonly modifiedBy: string;
  readonly upcCode: string;
  readonly createTimestamp: string;
  readonly entryTimestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
}

type LazyItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Item, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly itemId: string;
  readonly userId: string;
  readonly itemAcquireTypeId: string;
  readonly categoryId: string;
  readonly locationId: string;
  readonly sectionId: string;
  readonly statusId: string;
  readonly taxTypeId: string;
  readonly number: string;
  readonly itemName: string;
  readonly description: string;
  readonly receiveTimestamp: string;
  readonly donateIndicator?: boolean | null;
  readonly price: string;
  readonly cost?: string | null;
  readonly qty?: number | null;
  readonly qtyTagPrint?: number | null;
  readonly tagPrintedTimestamp: string;
  readonly commission: string;
  readonly itemAcquisitionTypeId: string;
  readonly brandId: string;
  readonly saleDetailId: string;
  readonly titleChanged?: boolean | null;
  readonly modifiedTimestamp: string;
  readonly modifiedBy: string;
  readonly upcCode: string;
  readonly createTimestamp: string;
  readonly entryTimestamp?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
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

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId: string;
  readonly parent?: Category | null;
  readonly productLineId?: string | null;
  readonly defCommissionId?: string | null;
  readonly categoryName: string;
  readonly categoryLevel: number;
  readonly active: boolean;
  readonly visible: boolean;
  readonly lastUpdateTimestamp: string;
  readonly defaultWeight: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryParentId?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryId: string;
  readonly parent: AsyncItem<Category | undefined>;
  readonly productLineId?: string | null;
  readonly defCommissionId?: string | null;
  readonly categoryName: string;
  readonly categoryLevel: number;
  readonly active: boolean;
  readonly visible: boolean;
  readonly lastUpdateTimestamp: string;
  readonly defaultWeight: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryParentId?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
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