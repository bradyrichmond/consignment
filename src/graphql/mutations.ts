/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
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
          storeCreditItemsId
          transactionItemsId
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
      credit {
        id
        amount
        items {
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
      clientCreditId
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
          storeCreditItemsId
          transactionItemsId
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
      credit {
        id
        amount
        items {
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
      clientCreditId
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
          storeCreditItemsId
          transactionItemsId
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
      credit {
        id
        amount
        items {
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
      clientCreditId
    }
  }
`;
export const createStoreCredit = /* GraphQL */ `
  mutation CreateStoreCredit(
    $input: CreateStoreCreditInput!
    $condition: ModelStoreCreditConditionInput
  ) {
    createStoreCredit(input: $input, condition: $condition) {
      id
      amount
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
          storeCreditItemsId
          transactionItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
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
export const updateStoreCredit = /* GraphQL */ `
  mutation UpdateStoreCredit(
    $input: UpdateStoreCreditInput!
    $condition: ModelStoreCreditConditionInput
  ) {
    updateStoreCredit(input: $input, condition: $condition) {
      id
      amount
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
          storeCreditItemsId
          transactionItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
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
export const deleteStoreCredit = /* GraphQL */ `
  mutation DeleteStoreCredit(
    $input: DeleteStoreCreditInput!
    $condition: ModelStoreCreditConditionInput
  ) {
    deleteStoreCredit(input: $input, condition: $condition) {
      id
      amount
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
          storeCreditItemsId
          transactionItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
        taxRate
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
      storeCreditItemsId
      transactionItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
    }
  }
`;
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
        taxRate
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
      storeCreditItemsId
      transactionItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
    }
  }
`;
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
        taxRate
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
      storeCreditItemsId
      transactionItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
    }
  }
`;
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
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
        credit {
          id
          amount
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
        clientCreditId
      }
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
          storeCreditItemsId
          transactionItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
        }
        nextToken
        startedAt
      }
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
      returned
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
        taxRate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
      }
      tenders {
        items {
          label
          receivedAmount
          giftCardId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          transactionTendersId
        }
        nextToken
        startedAt
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
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
        credit {
          id
          amount
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
        clientCreditId
      }
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
          storeCreditItemsId
          transactionItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
        }
        nextToken
        startedAt
      }
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
      returned
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
        taxRate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
      }
      tenders {
        items {
          label
          receivedAmount
          giftCardId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          transactionTendersId
        }
        nextToken
        startedAt
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
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
        credit {
          id
          amount
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
        clientCreditId
      }
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
          storeCreditItemsId
          transactionItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
        }
        nextToken
        startedAt
      }
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
      returned
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
        taxRate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
      }
      tenders {
        items {
          label
          receivedAmount
          giftCardId
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          transactionTendersId
        }
        nextToken
        startedAt
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
export const createTender = /* GraphQL */ `
  mutation CreateTender(
    $input: CreateTenderInput!
    $condition: ModelTenderConditionInput
  ) {
    createTender(input: $input, condition: $condition) {
      label
      receivedAmount
      giftCardId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionTendersId
    }
  }
`;
export const updateTender = /* GraphQL */ `
  mutation UpdateTender(
    $input: UpdateTenderInput!
    $condition: ModelTenderConditionInput
  ) {
    updateTender(input: $input, condition: $condition) {
      label
      receivedAmount
      giftCardId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionTendersId
    }
  }
`;
export const deleteTender = /* GraphQL */ `
  mutation DeleteTender(
    $input: DeleteTenderInput!
    $condition: ModelTenderConditionInput
  ) {
    deleteTender(input: $input, condition: $condition) {
      label
      receivedAmount
      giftCardId
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionTendersId
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
      taxRate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
      taxRate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
      taxRate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
    }
  }
`;
export const createConsignerSplit = /* GraphQL */ `
  mutation CreateConsignerSplit(
    $input: CreateConsignerSplitInput!
    $condition: ModelConsignerSplitConditionInput
  ) {
    createConsignerSplit(input: $input, condition: $condition) {
      id
      consignerPercentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateConsignerSplit = /* GraphQL */ `
  mutation UpdateConsignerSplit(
    $input: UpdateConsignerSplitInput!
    $condition: ModelConsignerSplitConditionInput
  ) {
    updateConsignerSplit(input: $input, condition: $condition) {
      id
      consignerPercentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteConsignerSplit = /* GraphQL */ `
  mutation DeleteConsignerSplit(
    $input: DeleteConsignerSplitInput!
    $condition: ModelConsignerSplitConditionInput
  ) {
    deleteConsignerSplit(input: $input, condition: $condition) {
      id
      consignerPercentage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAddress = /* GraphQL */ `
  mutation CreateAddress(
    $input: CreateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    createAddress(input: $input, condition: $condition) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress(
    $input: UpdateAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    updateAddress(input: $input, condition: $condition) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress(
    $input: DeleteAddressInput!
    $condition: ModelAddressConditionInput
  ) {
    deleteAddress(input: $input, condition: $condition) {
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
export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
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
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
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
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
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
export const createBrand = /* GraphQL */ `
  mutation CreateBrand(
    $input: CreateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    createBrand(input: $input, condition: $condition) {
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
export const updateBrand = /* GraphQL */ `
  mutation UpdateBrand(
    $input: UpdateBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    updateBrand(input: $input, condition: $condition) {
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
export const deleteBrand = /* GraphQL */ `
  mutation DeleteBrand(
    $input: DeleteBrandInput!
    $condition: ModelBrandConditionInput
  ) {
    deleteBrand(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createAttributeType = /* GraphQL */ `
  mutation CreateAttributeType(
    $input: CreateAttributeTypeInput!
    $condition: ModelAttributeTypeConditionInput
  ) {
    createAttributeType(input: $input, condition: $condition) {
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
export const updateAttributeType = /* GraphQL */ `
  mutation UpdateAttributeType(
    $input: UpdateAttributeTypeInput!
    $condition: ModelAttributeTypeConditionInput
  ) {
    updateAttributeType(input: $input, condition: $condition) {
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
export const deleteAttributeType = /* GraphQL */ `
  mutation DeleteAttributeType(
    $input: DeleteAttributeTypeInput!
    $condition: ModelAttributeTypeConditionInput
  ) {
    deleteAttributeType(input: $input, condition: $condition) {
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
export const createAttributeTypeValue = /* GraphQL */ `
  mutation CreateAttributeTypeValue(
    $input: CreateAttributeTypeValueInput!
    $condition: ModelAttributeTypeValueConditionInput
  ) {
    createAttributeTypeValue(input: $input, condition: $condition) {
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
export const updateAttributeTypeValue = /* GraphQL */ `
  mutation UpdateAttributeTypeValue(
    $input: UpdateAttributeTypeValueInput!
    $condition: ModelAttributeTypeValueConditionInput
  ) {
    updateAttributeTypeValue(input: $input, condition: $condition) {
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
export const deleteAttributeTypeValue = /* GraphQL */ `
  mutation DeleteAttributeTypeValue(
    $input: DeleteAttributeTypeValueInput!
    $condition: ModelAttributeTypeValueConditionInput
  ) {
    deleteAttributeTypeValue(input: $input, condition: $condition) {
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
export const createCategoryPriceGuide = /* GraphQL */ `
  mutation CreateCategoryPriceGuide(
    $input: CreateCategoryPriceGuideInput!
    $condition: ModelCategoryPriceGuideConditionInput
  ) {
    createCategoryPriceGuide(input: $input, condition: $condition) {
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
export const updateCategoryPriceGuide = /* GraphQL */ `
  mutation UpdateCategoryPriceGuide(
    $input: UpdateCategoryPriceGuideInput!
    $condition: ModelCategoryPriceGuideConditionInput
  ) {
    updateCategoryPriceGuide(input: $input, condition: $condition) {
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
export const deleteCategoryPriceGuide = /* GraphQL */ `
  mutation DeleteCategoryPriceGuide(
    $input: DeleteCategoryPriceGuideInput!
    $condition: ModelCategoryPriceGuideConditionInput
  ) {
    deleteCategoryPriceGuide(input: $input, condition: $condition) {
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
export const createGiftCard = /* GraphQL */ `
  mutation CreateGiftCard(
    $input: CreateGiftCardInput!
    $condition: ModelGiftCardConditionInput
  ) {
    createGiftCard(input: $input, condition: $condition) {
      id
      qrCode
      barcode
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateGiftCard = /* GraphQL */ `
  mutation UpdateGiftCard(
    $input: UpdateGiftCardInput!
    $condition: ModelGiftCardConditionInput
  ) {
    updateGiftCard(input: $input, condition: $condition) {
      id
      qrCode
      barcode
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteGiftCard = /* GraphQL */ `
  mutation DeleteGiftCard(
    $input: DeleteGiftCardInput!
    $condition: ModelGiftCardConditionInput
  ) {
    deleteGiftCard(input: $input, condition: $condition) {
      id
      qrCode
      barcode
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createGiftCardLog = /* GraphQL */ `
  mutation CreateGiftCardLog(
    $input: CreateGiftCardLogInput!
    $condition: ModelGiftCardLogConditionInput
  ) {
    createGiftCardLog(input: $input, condition: $condition) {
      id
      giftCard {
        id
        qrCode
        barcode
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      amount
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      giftCardLogGiftCardId
    }
  }
`;
export const updateGiftCardLog = /* GraphQL */ `
  mutation UpdateGiftCardLog(
    $input: UpdateGiftCardLogInput!
    $condition: ModelGiftCardLogConditionInput
  ) {
    updateGiftCardLog(input: $input, condition: $condition) {
      id
      giftCard {
        id
        qrCode
        barcode
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      amount
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      giftCardLogGiftCardId
    }
  }
`;
export const deleteGiftCardLog = /* GraphQL */ `
  mutation DeleteGiftCardLog(
    $input: DeleteGiftCardLogInput!
    $condition: ModelGiftCardLogConditionInput
  ) {
    deleteGiftCardLog(input: $input, condition: $condition) {
      id
      giftCard {
        id
        qrCode
        barcode
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      amount
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      giftCardLogGiftCardId
    }
  }
`;
export const createCategoryAttribute = /* GraphQL */ `
  mutation CreateCategoryAttribute(
    $input: CreateCategoryAttributeInput!
    $condition: ModelCategoryAttributeConditionInput
  ) {
    createCategoryAttribute(input: $input, condition: $condition) {
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
export const updateCategoryAttribute = /* GraphQL */ `
  mutation UpdateCategoryAttribute(
    $input: UpdateCategoryAttributeInput!
    $condition: ModelCategoryAttributeConditionInput
  ) {
    updateCategoryAttribute(input: $input, condition: $condition) {
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
export const deleteCategoryAttribute = /* GraphQL */ `
  mutation DeleteCategoryAttribute(
    $input: DeleteCategoryAttributeInput!
    $condition: ModelCategoryAttributeConditionInput
  ) {
    deleteCategoryAttribute(input: $input, condition: $condition) {
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
