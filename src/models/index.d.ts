import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId: string;
  readonly clientTypeId: string;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClient = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Client, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clientId: string;
  readonly clientTypeId: string;
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