/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
          userName
          itemAcquireTypeId
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
          saleDetailId
          titleChanged
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
          itemCategoryId
          itemLocationId
          itemBrandId
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
      userName
      itemAcquireTypeId
      category {
        id
        parent
        categoryId
        categoryName
        categoryLevel
        inactive
        lastUpdateTimestamp
        attributeTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      location {
        id
        locationId
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
      brand {
        id
        brandId
        description
        lastUpdateTimestamp
        inactive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      saleDetailId
      titleChanged
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
      itemCategoryId
      itemLocationId
      itemBrandId
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
        userName
        itemAcquireTypeId
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        location {
          id
          locationId
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationAddressId
        }
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
        brand {
          id
          brandId
          description
          lastUpdateTimestamp
          inactive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        saleDetailId
        titleChanged
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
        itemCategoryId
        itemLocationId
        itemBrandId
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
        userName
        itemAcquireTypeId
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        location {
          id
          locationId
          locationName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationAddressId
        }
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
        brand {
          id
          brandId
          description
          lastUpdateTimestamp
          inactive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        saleDetailId
        titleChanged
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
        itemCategoryId
        itemLocationId
        itemBrandId
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
        locationId
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
          locationId
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
          locationId
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
      locationId
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
        locationId
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
        locationId
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
export const getBrand = /* GraphQL */ `
  query GetBrand($id: ID!) {
    getBrand(id: $id) {
      id
      brandId
      description
      lastUpdateTimestamp
      inactive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listBrands = /* GraphQL */ `
  query ListBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brandId
        description
        lastUpdateTimestamp
        inactive
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
export const syncBrands = /* GraphQL */ `
  query SyncBrands(
    $filter: ModelBrandFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBrands(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        brandId
        description
        lastUpdateTimestamp
        inactive
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
      parent
      categoryId
      categoryName
      categoryLevel
      inactive
      lastUpdateTimestamp
      attributeTypes {
        items {
          id
          categoryId
          attributeTypeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parent
        categoryId
        categoryName
        categoryLevel
        inactive
        lastUpdateTimestamp
        attributeTypes {
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
        parent
        categoryId
        categoryName
        categoryLevel
        inactive
        lastUpdateTimestamp
        attributeTypes {
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
export const getAttributeType = /* GraphQL */ `
  query GetAttributeType($id: ID!) {
    getAttributeType(id: $id) {
      id
      attributeTypeId
      attributeTypeDescription
      lastUpdateTimestamp
      inactive
      categories {
        items {
          id
          categoryId
          attributeTypeId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
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
export const listAttributeTypes = /* GraphQL */ `
  query ListAttributeTypes(
    $filter: ModelAttributeTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributeTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        attributeTypeId
        attributeTypeDescription
        lastUpdateTimestamp
        inactive
        categories {
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
export const syncAttributeTypes = /* GraphQL */ `
  query SyncAttributeTypes(
    $filter: ModelAttributeTypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttributeTypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        attributeTypeId
        attributeTypeDescription
        lastUpdateTimestamp
        inactive
        categories {
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
export const getAttributeTypeValue = /* GraphQL */ `
  query GetAttributeTypeValue($id: ID!) {
    getAttributeTypeValue(id: $id) {
      id
      attributeType {
        id
        attributeTypeId
        attributeTypeDescription
        lastUpdateTimestamp
        inactive
        categories {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      attributeTypeValueId
      attributeTypeValue
      lastUpdateTimestamp
      inactive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeValueAttributeTypeId
    }
  }
`;
export const listAttributeTypeValues = /* GraphQL */ `
  query ListAttributeTypeValues(
    $filter: ModelAttributeTypeValueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttributeTypeValues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        attributeType {
          id
          attributeTypeId
          attributeTypeDescription
          lastUpdateTimestamp
          inactive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attributeTypeValueId
        attributeTypeValue
        lastUpdateTimestamp
        inactive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeValueAttributeTypeId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAttributeTypeValues = /* GraphQL */ `
  query SyncAttributeTypeValues(
    $filter: ModelAttributeTypeValueFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAttributeTypeValues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        attributeType {
          id
          attributeTypeId
          attributeTypeDescription
          lastUpdateTimestamp
          inactive
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attributeTypeValueId
        attributeTypeValue
        lastUpdateTimestamp
        inactive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeValueAttributeTypeId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategoryPriceGuide = /* GraphQL */ `
  query GetCategoryPriceGuide($id: ID!) {
    getCategoryPriceGuide(id: $id) {
      id
      category {
        id
        parent
        categoryId
        categoryName
        categoryLevel
        inactive
        lastUpdateTimestamp
        attributeTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      description
      price
      priceLevel
      sortOrder
      inactive
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryPriceGuideCategoryId
    }
  }
`;
export const listCategoryPriceGuides = /* GraphQL */ `
  query ListCategoryPriceGuides(
    $filter: ModelCategoryPriceGuideFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryPriceGuides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        description
        price
        priceLevel
        sortOrder
        inactive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryPriceGuideCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategoryPriceGuides = /* GraphQL */ `
  query SyncCategoryPriceGuides(
    $filter: ModelCategoryPriceGuideFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategoryPriceGuides(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        description
        price
        priceLevel
        sortOrder
        inactive
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryPriceGuideCategoryId
      }
      nextToken
      startedAt
    }
  }
`;
export const getCategoryAttribute = /* GraphQL */ `
  query GetCategoryAttribute($id: ID!) {
    getCategoryAttribute(id: $id) {
      id
      categoryId
      attributeTypeId
      category {
        id
        parent
        categoryId
        categoryName
        categoryLevel
        inactive
        lastUpdateTimestamp
        attributeTypes {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      attributeType {
        id
        attributeTypeId
        attributeTypeDescription
        lastUpdateTimestamp
        inactive
        categories {
          nextToken
          startedAt
        }
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
export const listCategoryAttributes = /* GraphQL */ `
  query ListCategoryAttributes(
    $filter: ModelCategoryAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategoryAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        attributeTypeId
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attributeType {
          id
          attributeTypeId
          attributeTypeDescription
          lastUpdateTimestamp
          inactive
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
export const syncCategoryAttributes = /* GraphQL */ `
  query SyncCategoryAttributes(
    $filter: ModelCategoryAttributeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategoryAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        categoryId
        attributeTypeId
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attributeType {
          id
          attributeTypeId
          attributeTypeDescription
          lastUpdateTimestamp
          inactive
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
export const categoryAttributesByCategoryId = /* GraphQL */ `
  query CategoryAttributesByCategoryId(
    $categoryId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryAttributesByCategoryId(
      categoryId: $categoryId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        attributeTypeId
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attributeType {
          id
          attributeTypeId
          attributeTypeDescription
          lastUpdateTimestamp
          inactive
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
export const categoryAttributesByAttributeTypeId = /* GraphQL */ `
  query CategoryAttributesByAttributeTypeId(
    $attributeTypeId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCategoryAttributeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    categoryAttributesByAttributeTypeId(
      attributeTypeId: $attributeTypeId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        categoryId
        attributeTypeId
        category {
          id
          parent
          categoryId
          categoryName
          categoryLevel
          inactive
          lastUpdateTimestamp
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        attributeType {
          id
          attributeTypeId
          attributeTypeDescription
          lastUpdateTimestamp
          inactive
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
