/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateAddress = /* GraphQL */ `
  subscription OnCreateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onCreateAddress(filter: $filter) {
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
export const onUpdateAddress = /* GraphQL */ `
  subscription OnUpdateAddress($filter: ModelSubscriptionAddressFilterInput) {
    onUpdateAddress(filter: $filter) {
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
export const onDeleteAddress = /* GraphQL */ `
  subscription OnDeleteAddress($filter: ModelSubscriptionAddressFilterInput) {
    onDeleteAddress(filter: $filter) {
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
export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity($filter: ModelSubscriptionCityFilterInput) {
    onCreateCity(filter: $filter) {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity($filter: ModelSubscriptionCityFilterInput) {
    onUpdateCity(filter: $filter) {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity($filter: ModelSubscriptionCityFilterInput) {
    onDeleteCity(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreatePriceGuide = /* GraphQL */ `
  subscription OnCreatePriceGuide(
    $filter: ModelSubscriptionPriceGuideFilterInput
  ) {
    onCreatePriceGuide(filter: $filter) {
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
export const onUpdatePriceGuide = /* GraphQL */ `
  subscription OnUpdatePriceGuide(
    $filter: ModelSubscriptionPriceGuideFilterInput
  ) {
    onUpdatePriceGuide(filter: $filter) {
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
export const onDeletePriceGuide = /* GraphQL */ `
  subscription OnDeletePriceGuide(
    $filter: ModelSubscriptionPriceGuideFilterInput
  ) {
    onDeletePriceGuide(filter: $filter) {
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
export const onCreateBrand = /* GraphQL */ `
  subscription OnCreateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onCreateBrand(filter: $filter) {
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
export const onUpdateBrand = /* GraphQL */ `
  subscription OnUpdateBrand($filter: ModelSubscriptionBrandFilterInput) {
    onUpdateBrand(filter: $filter) {
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
export const onDeleteBrand = /* GraphQL */ `
  subscription OnDeleteBrand($filter: ModelSubscriptionBrandFilterInput) {
    onDeleteBrand(filter: $filter) {
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
