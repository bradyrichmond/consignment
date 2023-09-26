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
  COUPON = "COUPON",
  TAX = "TAX"
}

export enum CouponType {
  PERCENT = "PERCENT",
  FLAT = "FLAT"
}

export enum GenderType {
  BOYS = "BOYS",
  GIRLS = "GIRLS",
  UNISEX = "UNISEX"
}

export enum SizeType {
  PREEMIE = "PREEMIE",
  NEWBORN = "NEWBORN",
  ZERO_TO_THREE_MONTHS = "ZERO_TO_THREE_MONTHS",
  THREE_MONTHS = "THREE_MONTHS",
  THREE_TO_SIX_MONTHS = "THREE_TO_SIX_MONTHS",
  SIX_MONTHS = "SIX_MONTHS",
  SIX_TO_NINE_MONTHS = "SIX_TO_NINE_MONTHS",
  NINE_MONTHS = "NINE_MONTHS",
  NINE_TO_TWELVE_MONTHS = "NINE_TO_TWELVE_MONTHS",
  TWELVE_MONTHS = "TWELVE_MONTHS",
  TWELVE_TO_EIGHTEEN_MONTHS = "TWELVE_TO_EIGHTEEN_MONTHS",
  EIGHTEEN_TWENTY_FOUR_MONTHS = "EIGHTEEN_TWENTY_FOUR_MONTHS",
  TWO = "TWO",
  TWO_THREE = "TWO_THREE",
  THREE = "THREE",
  THREE_FOUR = "THREE_FOUR",
  FOUR = "FOUR",
  FOUR_FIVE = "FOUR_FIVE",
  FIVE = "FIVE",
  FIVE_SIX = "FIVE_SIX",
  SIX = "SIX",
  SIX_SEVEN = "SIX_SEVEN",
  SEVEN = "SEVEN",
  SEVEN_EIGHT = "SEVEN_EIGHT",
  EIGHT = "EIGHT",
  EIGHT_NINE = "EIGHT_NINE",
  EIGHT_TEN = "EIGHT_TEN",
  NINE = "NINE",
  NINE_TEN = "NINE_TEN",
  TEN = "TEN",
  TEN_ELEVEN = "TEN_ELEVEN",
  TEN_TWELVE = "TEN_TWELVE",
  ELEVEN = "ELEVEN",
  ELEVEN_TWELVE = "ELEVEN_TWELVE",
  TWELVE = "TWELVE",
  TWELVE_THIRTEEN = "TWELVE_THIRTEEN",
  TWELVE_FOURTEEN = "TWELVE_FOURTEEN",
  THIRTEEN = "THIRTEEN",
  THIRTEEN_FOURTEEN = "THIRTEEN_FOURTEEN",
  FOURTEEN = "FOURTEEN",
  FOURTEEN_FIFTEEN = "FOURTEEN_FIFTEEN",
  FOURTEEN_SIXTEEN = "FOURTEEN_SIXTEEN",
  FIFTEEN = "FIFTEEN",
  FIFTEEN_SIXTEEN = "FIFTEEN_SIXTEEN",
  SIXTEEN = "SIXTEEN",
  SIXTEEN_EIGHTEEN = "SIXTEEN_EIGHTEEN"
}



type EagerOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly users: User[];
  readonly logoId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyOrganization = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Organization, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly users: AsyncCollection<User>;
  readonly logoId?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Organization = LazyLoading extends LazyLoadingDisabled ? EagerOrganization : LazyOrganization

export declare const Organization: (new (init: ModelInit<Organization>) => Organization) & {
  copyOf(source: Organization, mutator: (draft: MutableModel<Organization>) => MutableModel<Organization> | void): Organization;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoId: string;
  readonly disabled?: boolean | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationUsersId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cognitoId: string;
  readonly disabled?: boolean | null;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly organizationUsersId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
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
  readonly transactions?: (Transaction | null)[] | null;
  readonly rewards?: Rewards | null;
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientCreditId?: string | null;
  readonly clientRewardsId?: string | null;
  readonly clientOrganizationId: string;
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
  readonly transactions: AsyncCollection<Transaction>;
  readonly rewards: AsyncItem<Rewards | undefined>;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientCreditId?: string | null;
  readonly clientRewardsId?: string | null;
  readonly clientOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeCreditOrganizationId: string;
}

type LazyStoreCredit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<StoreCredit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly amount: number;
  readonly items: AsyncCollection<Item>;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeCreditOrganizationId: string;
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
  readonly gender?: GenderType | keyof typeof GenderType | null;
  readonly size?: SizeType | keyof typeof SizeType | null;
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
  readonly storeCreditItemsId?: string | null;
  readonly itemCategoryId?: string | null;
  readonly itemLocationId?: string | null;
  readonly itemBrandId?: string | null;
  readonly itemOrganizationId: string;
  readonly transactionItemsId?: string | null;
  readonly transactionMissingItemsId?: string | null;
  readonly pickUpItemsId?: string | null;
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
  readonly gender?: GenderType | keyof typeof GenderType | null;
  readonly size?: SizeType | keyof typeof SizeType | null;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientItemsId?: string | null;
  readonly storeCreditItemsId?: string | null;
  readonly itemCategoryId?: string | null;
  readonly itemLocationId?: string | null;
  readonly itemBrandId?: string | null;
  readonly itemOrganizationId: string;
  readonly transactionItemsId?: string | null;
  readonly transactionMissingItemsId?: string | null;
  readonly pickUpItemsId?: string | null;
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
  readonly coupons?: (Coupon | null)[] | null;
  readonly missingItems?: (Item | null)[] | null;
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientTransactionsId?: string | null;
  readonly transactionLocationId?: string | null;
  readonly transactionOrganizationId: string;
  readonly rewardsTransactionsId?: string | null;
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
  readonly coupons: AsyncCollection<Coupon>;
  readonly missingItems: AsyncCollection<Item>;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly clientTransactionsId?: string | null;
  readonly transactionLocationId?: string | null;
  readonly transactionOrganizationId: string;
  readonly rewardsTransactionsId?: string | null;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionTendersId?: string | null;
  readonly tenderOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionTendersId?: string | null;
  readonly tenderOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationAddressId?: string | null;
  readonly locationOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationAddressId?: string | null;
  readonly locationOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly consignerSplitOrganizationId: string;
}

type LazyConsignerSplit = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsignerSplit, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly consignerPercentage: number;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly consignerSplitOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly brandOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly brandOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly attributeTypeOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly attributeTypeOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly attributeTypeValueAttributeTypeId?: string | null;
  readonly attributeTypeValueOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly attributeTypeValueAttributeTypeId?: string | null;
  readonly attributeTypeValueOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryPriceGuideCategoryId?: string | null;
  readonly categoryPriceGuideOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly categoryPriceGuideCategoryId?: string | null;
  readonly categoryPriceGuideOrganizationId: string;
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
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly giftCardOrganizationId: string;
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
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly giftCardOrganizationId: string;
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

type EagerCoupon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coupon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: CouponType | keyof typeof CouponType;
  readonly amount: number;
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionCouponsId?: string | null;
  readonly couponOrganizationId: string;
}

type LazyCoupon = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Coupon, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly type: CouponType | keyof typeof CouponType;
  readonly amount: number;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly transactionCouponsId?: string | null;
  readonly couponOrganizationId: string;
}

export declare type Coupon = LazyLoading extends LazyLoadingDisabled ? EagerCoupon : LazyCoupon

export declare const Coupon: (new (init: ModelInit<Coupon>) => Coupon) & {
  copyOf(source: Coupon, mutator: (draft: MutableModel<Coupon>) => MutableModel<Coupon> | void): Coupon;
}

type EagerConsignmentDropoff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsignmentDropoff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly complete: boolean;
  readonly showError?: boolean | null;
  readonly errorPrompt?: string | null;
  readonly cubby?: Cubby | null;
  readonly oversizedDescription?: string | null;
  readonly oversizedItems?: boolean | null;
  readonly newConsigner?: boolean | null;
  readonly timerCleared?: boolean | null;
  readonly createdTime: number;
  readonly hasAppointment?: boolean | null;
  readonly locationId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly consignmentDropoffCubbyId?: string | null;
}

type LazyConsignmentDropoff = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ConsignmentDropoff, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly complete: boolean;
  readonly showError?: boolean | null;
  readonly errorPrompt?: string | null;
  readonly cubby: AsyncItem<Cubby | undefined>;
  readonly oversizedDescription?: string | null;
  readonly oversizedItems?: boolean | null;
  readonly newConsigner?: boolean | null;
  readonly timerCleared?: boolean | null;
  readonly createdTime: number;
  readonly hasAppointment?: boolean | null;
  readonly locationId: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly consignmentDropoffCubbyId?: string | null;
}

export declare type ConsignmentDropoff = LazyLoading extends LazyLoadingDisabled ? EagerConsignmentDropoff : LazyConsignmentDropoff

export declare const ConsignmentDropoff: (new (init: ModelInit<ConsignmentDropoff>) => ConsignmentDropoff) & {
  copyOf(source: ConsignmentDropoff, mutator: (draft: MutableModel<ConsignmentDropoff>) => MutableModel<ConsignmentDropoff> | void): ConsignmentDropoff;
}

type EagerCubby = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cubby, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cubbyNumber: string;
  readonly locationId: string;
  readonly inUse: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCubby = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cubby, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly cubbyNumber: string;
  readonly locationId: string;
  readonly inUse: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cubby = LazyLoading extends LazyLoadingDisabled ? EagerCubby : LazyCubby

export declare const Cubby: (new (init: ModelInit<Cubby>) => Cubby) & {
  copyOf(source: Cubby, mutator: (draft: MutableModel<Cubby>) => MutableModel<Cubby> | void): Cubby;
}

type EagerAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly location?: Location | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentLocationId?: string | null;
}

type LazyAppointment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Appointment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly date: number;
  readonly firstName: string;
  readonly lastName: string;
  readonly phone: string;
  readonly location: AsyncItem<Location | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly appointmentLocationId?: string | null;
}

export declare type Appointment = LazyLoading extends LazyLoadingDisabled ? EagerAppointment : LazyAppointment

export declare const Appointment: (new (init: ModelInit<Appointment>) => Appointment) & {
  copyOf(source: Appointment, mutator: (draft: MutableModel<Appointment>) => MutableModel<Appointment> | void): Appointment;
}

type EagerBlackout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blackout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dayOfWeek: number;
  readonly time: string;
  readonly location?: Location | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blackoutLocationId?: string | null;
}

type LazyBlackout = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Blackout, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly dayOfWeek: number;
  readonly time: string;
  readonly location: AsyncItem<Location | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly blackoutLocationId?: string | null;
}

export declare type Blackout = LazyLoading extends LazyLoadingDisabled ? EagerBlackout : LazyBlackout

export declare const Blackout: (new (init: ModelInit<Blackout>) => Blackout) & {
  copyOf(source: Blackout, mutator: (draft: MutableModel<Blackout>) => MutableModel<Blackout> | void): Blackout;
}

type EagerChatMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly images?: (string | null)[] | null;
  readonly author: User;
  readonly authorId: string;
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatMessageAuthorId: string;
  readonly chatMessageOrganizationId: string;
  readonly chatRoomMessagesId?: string | null;
}

type LazyChatMessage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatMessage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message?: string | null;
  readonly images?: (string | null)[] | null;
  readonly author: AsyncItem<User>;
  readonly authorId: string;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatMessageAuthorId: string;
  readonly chatMessageOrganizationId: string;
  readonly chatRoomMessagesId?: string | null;
}

export declare type ChatMessage = LazyLoading extends LazyLoadingDisabled ? EagerChatMessage : LazyChatMessage

export declare const ChatMessage: (new (init: ModelInit<ChatMessage>) => ChatMessage) & {
  copyOf(source: ChatMessage, mutator: (draft: MutableModel<ChatMessage>) => MutableModel<ChatMessage> | void): ChatMessage;
}

type EagerChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly messages?: (ChatMessage | null)[] | null;
  readonly accessList?: (string | null)[] | null;
  readonly location?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChatRoom = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChatRoom, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly messages: AsyncCollection<ChatMessage>;
  readonly accessList?: (string | null)[] | null;
  readonly location?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChatRoom = LazyLoading extends LazyLoadingDisabled ? EagerChatRoom : LazyChatRoom

export declare const ChatRoom: (new (init: ModelInit<ChatRoom>) => ChatRoom) & {
  copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom>) => MutableModel<ChatRoom> | void): ChatRoom;
}

type EagerRewards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rewards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points: number;
  readonly transactions: (Transaction | null)[];
  readonly organization: Organization;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rewardsOrganizationId: string;
}

type LazyRewards = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Rewards, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly points: number;
  readonly transactions: AsyncCollection<Transaction>;
  readonly organization: AsyncItem<Organization>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly rewardsOrganizationId: string;
}

export declare type Rewards = LazyLoading extends LazyLoadingDisabled ? EagerRewards : LazyRewards

export declare const Rewards: (new (init: ModelInit<Rewards>) => Rewards) & {
  copyOf(source: Rewards, mutator: (draft: MutableModel<Rewards>) => MutableModel<Rewards> | void): Rewards;
}

type EagerPickUp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PickUp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: Item[];
  readonly location: Location;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pickUpLocationId: string;
}

type LazyPickUp = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PickUp, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly items: AsyncCollection<Item>;
  readonly location: AsyncItem<Location>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly pickUpLocationId: string;
}

export declare type PickUp = LazyLoading extends LazyLoadingDisabled ? EagerPickUp : LazyPickUp

export declare const PickUp: (new (init: ModelInit<PickUp>) => PickUp) & {
  copyOf(source: PickUp, mutator: (draft: MutableModel<PickUp>) => MutableModel<PickUp> | void): PickUp;
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