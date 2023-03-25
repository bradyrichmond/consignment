/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const searchClients = /* GraphQL */ `
  query SearchClients(
    $filter: SearchableClientFilterInput
    $sort: [SearchableClientSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableClientAggregationInput]
  ) {
    searchClients(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        clientId
        clientTypeId
        firstName
        lastName
        companyName
        account
        receiveMailInd
        nextItemNumber
        phone
        email
        createTimestamp
        activeTimestamp
        inactiveTimestamp
        modifiedBy
        items {
          itemId
          priceCodeId
          userId
          commissionId
          itemAcquireTypeId
          categoryId
          locationId
          sectionId
          statusId
          taxTypeId
          number
          name
          description
          price
          cost
          modifiedBy
          consignmentId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
      id
      clientId
      clientTypeId
      firstName
      lastName
      companyName
      account
      receiveMailInd
      nextItemNumber
      phone
      email
      createTimestamp
      activeTimestamp
      inactiveTimestamp
      modifiedBy
      items {
        itemId
        priceCodeId
        userId
        commissionId
        itemAcquireTypeId
        categoryId
        locationId
        sectionId
        statusId
        taxTypeId
        number
        name
        description
        price
        cost
        modifiedBy
        consignmentId
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientId
        clientTypeId
        firstName
        lastName
        companyName
        account
        receiveMailInd
        nextItemNumber
        phone
        email
        createTimestamp
        activeTimestamp
        inactiveTimestamp
        modifiedBy
        items {
          itemId
          priceCodeId
          userId
          commissionId
          itemAcquireTypeId
          categoryId
          locationId
          sectionId
          statusId
          taxTypeId
          number
          name
          description
          price
          cost
          modifiedBy
          consignmentId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClients = /* GraphQL */ `
  query SyncClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        clientId
        clientTypeId
        firstName
        lastName
        companyName
        account
        receiveMailInd
        nextItemNumber
        phone
        email
        createTimestamp
        activeTimestamp
        inactiveTimestamp
        modifiedBy
        items {
          itemId
          priceCodeId
          userId
          commissionId
          itemAcquireTypeId
          categoryId
          locationId
          sectionId
          statusId
          taxTypeId
          number
          name
          description
          price
          cost
          modifiedBy
          consignmentId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getItem = /* GraphQL */ `
  query GetItem($id: ID!) {
    getItem(id: $id) {
      itemId
      priceCodeId
      userId
      commissionId
      itemAcquireTypeId
      categoryId
      locationId
      sectionId
      statusId
      taxTypeId
      number
      name
      description
      price
      cost
      modifiedBy
      consignmentId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listItems = /* GraphQL */ `
  query ListItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        itemId
        priceCodeId
        userId
        commissionId
        itemAcquireTypeId
        categoryId
        locationId
        sectionId
        statusId
        taxTypeId
        number
        name
        description
        price
        cost
        modifiedBy
        consignmentId
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncItems = /* GraphQL */ `
  query SyncItems(
    $filter: ModelItemFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncItems(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        itemId
        priceCodeId
        userId
        commissionId
        itemAcquireTypeId
        categoryId
        locationId
        sectionId
        statusId
        taxTypeId
        number
        name
        description
        price
        cost
        modifiedBy
        consignmentId
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
