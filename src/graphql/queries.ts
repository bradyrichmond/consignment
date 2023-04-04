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
        clientType
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
          nextToken
          startedAt
        }
        addresses {
          nextToken
          startedAt
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
      clientType
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
        items {
          id
          itemId
          userId
          itemAcquireTypeId
          categoryId
          locationId
          sectionId
          statusId
          taxTypeId
          number
          itemName
          description
          receiveTimestamp
          donateIndicator
          price
          cost
          qty
          qtyTagPrint
          tagPrintedTimestamp
          commission
          itemAcquisitionTypeId
          brandId
          saleDetailId
          titleChanged
          modifiedTimestamp
          modifiedBy
          upcCode
          createTimestamp
          entryTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
        }
        nextToken
        startedAt
      }
      addresses {
        items {
          id
          addressId
          addressLabel
          label
          address1
          address2
          address3
          city
          state
          zip
          primary
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientAddressesId
        }
        nextToken
        startedAt
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
        clientType
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
          nextToken
          startedAt
        }
        addresses {
          nextToken
          startedAt
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
        clientType
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
          nextToken
          startedAt
        }
        addresses {
          nextToken
          startedAt
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
      id
      itemId
      userId
      itemAcquireTypeId
      categoryId
      locationId
      sectionId
      statusId
      taxTypeId
      number
      itemName
      description
      receiveTimestamp
      donateIndicator
      price
      cost
      qty
      qtyTagPrint
      tagPrintedTimestamp
      commission
      itemAcquisitionTypeId
      brandId
      saleDetailId
      titleChanged
      modifiedTimestamp
      modifiedBy
      upcCode
      createTimestamp
      entryTimestamp
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientItemsId
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
        id
        itemId
        userId
        itemAcquireTypeId
        categoryId
        locationId
        sectionId
        statusId
        taxTypeId
        number
        itemName
        description
        receiveTimestamp
        donateIndicator
        price
        cost
        qty
        qtyTagPrint
        tagPrintedTimestamp
        commission
        itemAcquisitionTypeId
        brandId
        saleDetailId
        titleChanged
        modifiedTimestamp
        modifiedBy
        upcCode
        createTimestamp
        entryTimestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientItemsId
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
        id
        itemId
        userId
        itemAcquireTypeId
        categoryId
        locationId
        sectionId
        statusId
        taxTypeId
        number
        itemName
        description
        receiveTimestamp
        donateIndicator
        price
        cost
        qty
        qtyTagPrint
        tagPrintedTimestamp
        commission
        itemAcquisitionTypeId
        brandId
        saleDetailId
        titleChanged
        modifiedTimestamp
        modifiedBy
        upcCode
        createTimestamp
        entryTimestamp
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientItemsId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      clientTransId
      client {
        id
        clientId
        clientType
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
          nextToken
          startedAt
        }
        addresses {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      itemId
      payoutId
      transCdId
      userId
      actTransTimestamp
      actTransDesc
      actTransAmt
      hold
      glExportInd
      syncInd
      saleDetailId
      location {
        id
        locationName
        address {
          id
          addressId
          addressLabel
          label
          address1
          address2
          address3
          city
          state
          zip
          primary
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientAddressesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionLocationId
    }
  }
`;
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clientTransId
        client {
          id
          clientId
          clientType
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        itemId
        payoutId
        transCdId
        userId
        actTransTimestamp
        actTransDesc
        actTransAmt
        hold
        glExportInd
        syncInd
        saleDetailId
        location {
          id
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationAddressId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        transactionLocationId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTransactions = /* GraphQL */ `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        clientTransId
        client {
          id
          clientId
          clientType
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        itemId
        payoutId
        transCdId
        userId
        actTransTimestamp
        actTransDesc
        actTransAmt
        hold
        glExportInd
        syncInd
        saleDetailId
        location {
          id
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationAddressId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        transactionLocationId
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      locationName
      address {
        id
        addressId
        addressLabel
        label
        address1
        address2
        address3
        city
        state
        zip
        primary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientAddressesId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        locationName
        address {
          id
          addressId
          addressLabel
          label
          address1
          address2
          address3
          city
          state
          zip
          primary
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientAddressesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        locationName
        address {
          id
          addressId
          addressLabel
          label
          address1
          address2
          address3
          city
          state
          zip
          primary
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientAddressesId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAddress = /* GraphQL */ `
  query GetAddress($id: ID!) {
    getAddress(id: $id) {
      id
      addressId
      addressLabel
      label
      address1
      address2
      address3
      city
      state
      zip
      primary
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientAddressesId
    }
  }
`;
export const listAddresses = /* GraphQL */ `
  query ListAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        addressId
        addressLabel
        label
        address1
        address2
        address3
        city
        state
        zip
        primary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientAddressesId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAddresses = /* GraphQL */ `
  query SyncAddresses(
    $filter: ModelAddressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAddresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        addressId
        addressLabel
        label
        address1
        address2
        address3
        city
        state
        zip
        primary
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        clientAddressesId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
      cityId
      zip
      city
      state
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCities = /* GraphQL */ `
  query ListCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        cityId
        zip
        city
        state
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
export const syncCities = /* GraphQL */ `
  query SyncCities(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        cityId
        zip
        city
        state
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
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      categoryId
      parent {
        id
        categoryId
        parent {
          id
          categoryId
          productLineId
          defCommissionId
          categoryName
          categoryLevel
          active
          visible
          lastUpdateTimestamp
          defaultWeight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryParentId
        }
        productLineId
        defCommissionId
        categoryName
        categoryLevel
        active
        visible
        lastUpdateTimestamp
        defaultWeight
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryParentId
      }
      productLineId
      defCommissionId
      categoryName
      categoryLevel
      active
      visible
      lastUpdateTimestamp
      defaultWeight
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryParentId
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryId
        parent {
          id
          categoryId
          productLineId
          defCommissionId
          categoryName
          categoryLevel
          active
          visible
          lastUpdateTimestamp
          defaultWeight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryParentId
        }
        productLineId
        defCommissionId
        categoryName
        categoryLevel
        active
        visible
        lastUpdateTimestamp
        defaultWeight
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryParentId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoryId
        parent {
          id
          categoryId
          productLineId
          defCommissionId
          categoryName
          categoryLevel
          active
          visible
          lastUpdateTimestamp
          defaultWeight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryParentId
        }
        productLineId
        defCommissionId
        categoryName
        categoryLevel
        active
        visible
        lastUpdateTimestamp
        defaultWeight
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryParentId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPriceGuide = /* GraphQL */ `
  query GetPriceGuide($id: ID!) {
    getPriceGuide(id: $id) {
      id
      categoryPriceGuideId
      category {
        id
        categoryId
        parent {
          id
          categoryId
          productLineId
          defCommissionId
          categoryName
          categoryLevel
          active
          visible
          lastUpdateTimestamp
          defaultWeight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryParentId
        }
        productLineId
        defCommissionId
        categoryName
        categoryLevel
        active
        visible
        lastUpdateTimestamp
        defaultWeight
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryParentId
      }
      price
      priceLevel
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      priceGuideCategoryId
    }
  }
`;
export const listPriceGuides = /* GraphQL */ `
  query ListPriceGuides(
    $filter: ModelPriceGuideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPriceGuides(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryPriceGuideId
        category {
          id
          categoryId
          productLineId
          defCommissionId
          categoryName
          categoryLevel
          active
          visible
          lastUpdateTimestamp
          defaultWeight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryParentId
        }
        price
        priceLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        priceGuideCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPriceGuides = /* GraphQL */ `
  query SyncPriceGuides(
    $filter: ModelPriceGuideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPriceGuides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoryPriceGuideId
        category {
          id
          categoryId
          productLineId
          defCommissionId
          categoryName
          categoryLevel
          active
          visible
          lastUpdateTimestamp
          defaultWeight
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          categoryParentId
        }
        price
        priceLevel
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        priceGuideCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
