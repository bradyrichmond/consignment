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
          returned
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
          transactionMissingItemsId
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
      transactions {
        items {
          id
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientTransactionsId
          rewardsTransactionsId
          transactionLocationId
        }
        nextToken
        startedAt
      }
      rewards {
        id
        points
        transactions {
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
      clientRewardsId
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
          returned
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
          transactionMissingItemsId
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
      transactions {
        items {
          id
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientTransactionsId
          rewardsTransactionsId
          transactionLocationId
        }
        nextToken
        startedAt
      }
      rewards {
        id
        points
        transactions {
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
      clientRewardsId
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
          returned
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
          transactionMissingItemsId
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
      transactions {
        items {
          id
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientTransactionsId
          rewardsTransactionsId
          transactionLocationId
        }
        nextToken
        startedAt
      }
      rewards {
        id
        points
        transactions {
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
      clientRewardsId
    }
  }
`;
export const onCreateStoreCredit = /* GraphQL */ `
  subscription OnCreateStoreCredit(
    $filter: ModelSubscriptionStoreCreditFilterInput
  ) {
    onCreateStoreCredit(filter: $filter) {
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
          returned
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
          transactionMissingItemsId
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
export const onUpdateStoreCredit = /* GraphQL */ `
  subscription OnUpdateStoreCredit(
    $filter: ModelSubscriptionStoreCreditFilterInput
  ) {
    onUpdateStoreCredit(filter: $filter) {
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
          returned
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
          transactionMissingItemsId
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
export const onDeleteStoreCredit = /* GraphQL */ `
  subscription OnDeleteStoreCredit(
    $filter: ModelSubscriptionStoreCreditFilterInput
  ) {
    onDeleteStoreCredit(filter: $filter) {
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
          returned
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
          transactionMissingItemsId
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
      returned
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
      transactionMissingItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
    }
  }
`;
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
      returned
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
      transactionMissingItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
    }
  }
`;
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
      returned
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
      transactionMissingItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
    }
  }
`;
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
      id
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
          returned
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
          transactionMissingItemsId
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
      coupons {
        items {
          id
          name
          type
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          transactionCouponsId
        }
        nextToken
        startedAt
      }
      missingItems {
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
          returned
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
          transactionMissingItemsId
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
      clientTransactionsId
      rewardsTransactionsId
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
          returned
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
          transactionMissingItemsId
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
      coupons {
        items {
          id
          name
          type
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          transactionCouponsId
        }
        nextToken
        startedAt
      }
      missingItems {
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
          returned
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
          transactionMissingItemsId
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
      clientTransactionsId
      rewardsTransactionsId
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
          returned
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
          transactionMissingItemsId
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
      coupons {
        items {
          id
          name
          type
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          transactionCouponsId
        }
        nextToken
        startedAt
      }
      missingItems {
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
          returned
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
          transactionMissingItemsId
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
      clientTransactionsId
      rewardsTransactionsId
      transactionLocationId
    }
  }
`;
export const onCreateTender = /* GraphQL */ `
  subscription OnCreateTender($filter: ModelSubscriptionTenderFilterInput) {
    onCreateTender(filter: $filter) {
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
export const onUpdateTender = /* GraphQL */ `
  subscription OnUpdateTender($filter: ModelSubscriptionTenderFilterInput) {
    onUpdateTender(filter: $filter) {
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
export const onDeleteTender = /* GraphQL */ `
  subscription OnDeleteTender($filter: ModelSubscriptionTenderFilterInput) {
    onDeleteTender(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateConsignerSplit = /* GraphQL */ `
  subscription OnCreateConsignerSplit(
    $filter: ModelSubscriptionConsignerSplitFilterInput
  ) {
    onCreateConsignerSplit(filter: $filter) {
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
export const onUpdateConsignerSplit = /* GraphQL */ `
  subscription OnUpdateConsignerSplit(
    $filter: ModelSubscriptionConsignerSplitFilterInput
  ) {
    onUpdateConsignerSplit(filter: $filter) {
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
export const onDeleteConsignerSplit = /* GraphQL */ `
  subscription OnDeleteConsignerSplit(
    $filter: ModelSubscriptionConsignerSplitFilterInput
  ) {
    onDeleteConsignerSplit(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateAttributeType = /* GraphQL */ `
  subscription OnCreateAttributeType(
    $filter: ModelSubscriptionAttributeTypeFilterInput
  ) {
    onCreateAttributeType(filter: $filter) {
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
export const onUpdateAttributeType = /* GraphQL */ `
  subscription OnUpdateAttributeType(
    $filter: ModelSubscriptionAttributeTypeFilterInput
  ) {
    onUpdateAttributeType(filter: $filter) {
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
export const onDeleteAttributeType = /* GraphQL */ `
  subscription OnDeleteAttributeType(
    $filter: ModelSubscriptionAttributeTypeFilterInput
  ) {
    onDeleteAttributeType(filter: $filter) {
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
export const onCreateAttributeTypeValue = /* GraphQL */ `
  subscription OnCreateAttributeTypeValue(
    $filter: ModelSubscriptionAttributeTypeValueFilterInput
  ) {
    onCreateAttributeTypeValue(filter: $filter) {
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
export const onUpdateAttributeTypeValue = /* GraphQL */ `
  subscription OnUpdateAttributeTypeValue(
    $filter: ModelSubscriptionAttributeTypeValueFilterInput
  ) {
    onUpdateAttributeTypeValue(filter: $filter) {
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
export const onDeleteAttributeTypeValue = /* GraphQL */ `
  subscription OnDeleteAttributeTypeValue(
    $filter: ModelSubscriptionAttributeTypeValueFilterInput
  ) {
    onDeleteAttributeTypeValue(filter: $filter) {
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
export const onCreateCategoryPriceGuide = /* GraphQL */ `
  subscription OnCreateCategoryPriceGuide(
    $filter: ModelSubscriptionCategoryPriceGuideFilterInput
  ) {
    onCreateCategoryPriceGuide(filter: $filter) {
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
export const onUpdateCategoryPriceGuide = /* GraphQL */ `
  subscription OnUpdateCategoryPriceGuide(
    $filter: ModelSubscriptionCategoryPriceGuideFilterInput
  ) {
    onUpdateCategoryPriceGuide(filter: $filter) {
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
export const onDeleteCategoryPriceGuide = /* GraphQL */ `
  subscription OnDeleteCategoryPriceGuide(
    $filter: ModelSubscriptionCategoryPriceGuideFilterInput
  ) {
    onDeleteCategoryPriceGuide(filter: $filter) {
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
export const onCreateGiftCard = /* GraphQL */ `
  subscription OnCreateGiftCard($filter: ModelSubscriptionGiftCardFilterInput) {
    onCreateGiftCard(filter: $filter) {
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
export const onUpdateGiftCard = /* GraphQL */ `
  subscription OnUpdateGiftCard($filter: ModelSubscriptionGiftCardFilterInput) {
    onUpdateGiftCard(filter: $filter) {
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
export const onDeleteGiftCard = /* GraphQL */ `
  subscription OnDeleteGiftCard($filter: ModelSubscriptionGiftCardFilterInput) {
    onDeleteGiftCard(filter: $filter) {
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
export const onCreateGiftCardLog = /* GraphQL */ `
  subscription OnCreateGiftCardLog(
    $filter: ModelSubscriptionGiftCardLogFilterInput
  ) {
    onCreateGiftCardLog(filter: $filter) {
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
export const onUpdateGiftCardLog = /* GraphQL */ `
  subscription OnUpdateGiftCardLog(
    $filter: ModelSubscriptionGiftCardLogFilterInput
  ) {
    onUpdateGiftCardLog(filter: $filter) {
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
export const onDeleteGiftCardLog = /* GraphQL */ `
  subscription OnDeleteGiftCardLog(
    $filter: ModelSubscriptionGiftCardLogFilterInput
  ) {
    onDeleteGiftCardLog(filter: $filter) {
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
export const onCreateCoupon = /* GraphQL */ `
  subscription OnCreateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onCreateCoupon(filter: $filter) {
      id
      name
      type
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionCouponsId
    }
  }
`;
export const onUpdateCoupon = /* GraphQL */ `
  subscription OnUpdateCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onUpdateCoupon(filter: $filter) {
      id
      name
      type
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionCouponsId
    }
  }
`;
export const onDeleteCoupon = /* GraphQL */ `
  subscription OnDeleteCoupon($filter: ModelSubscriptionCouponFilterInput) {
    onDeleteCoupon(filter: $filter) {
      id
      name
      type
      amount
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionCouponsId
    }
  }
`;
export const onCreateConsignmentDropoff = /* GraphQL */ `
  subscription OnCreateConsignmentDropoff(
    $filter: ModelSubscriptionConsignmentDropoffFilterInput
  ) {
    onCreateConsignmentDropoff(filter: $filter) {
      id
      firstName
      lastName
      phone
      complete
      showError
      errorPrompt
      cubby {
        id
        cubbyNumber
        locationId
        inUse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      oversizedDescription
      oversizedItems
      newConsigner
      timerCleared
      createdTime
      hasAppointment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consignmentDropoffCubbyId
    }
  }
`;
export const onUpdateConsignmentDropoff = /* GraphQL */ `
  subscription OnUpdateConsignmentDropoff(
    $filter: ModelSubscriptionConsignmentDropoffFilterInput
  ) {
    onUpdateConsignmentDropoff(filter: $filter) {
      id
      firstName
      lastName
      phone
      complete
      showError
      errorPrompt
      cubby {
        id
        cubbyNumber
        locationId
        inUse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      oversizedDescription
      oversizedItems
      newConsigner
      timerCleared
      createdTime
      hasAppointment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consignmentDropoffCubbyId
    }
  }
`;
export const onDeleteConsignmentDropoff = /* GraphQL */ `
  subscription OnDeleteConsignmentDropoff(
    $filter: ModelSubscriptionConsignmentDropoffFilterInput
  ) {
    onDeleteConsignmentDropoff(filter: $filter) {
      id
      firstName
      lastName
      phone
      complete
      showError
      errorPrompt
      cubby {
        id
        cubbyNumber
        locationId
        inUse
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      oversizedDescription
      oversizedItems
      newConsigner
      timerCleared
      createdTime
      hasAppointment
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consignmentDropoffCubbyId
    }
  }
`;
export const onCreateCubby = /* GraphQL */ `
  subscription OnCreateCubby($filter: ModelSubscriptionCubbyFilterInput) {
    onCreateCubby(filter: $filter) {
      id
      cubbyNumber
      locationId
      inUse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCubby = /* GraphQL */ `
  subscription OnUpdateCubby($filter: ModelSubscriptionCubbyFilterInput) {
    onUpdateCubby(filter: $filter) {
      id
      cubbyNumber
      locationId
      inUse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCubby = /* GraphQL */ `
  subscription OnDeleteCubby($filter: ModelSubscriptionCubbyFilterInput) {
    onDeleteCubby(filter: $filter) {
      id
      cubbyNumber
      locationId
      inUse
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateAppointment = /* GraphQL */ `
  subscription OnCreateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onCreateAppointment(filter: $filter) {
      id
      date
      firstName
      lastName
      phone
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentLocationId
    }
  }
`;
export const onUpdateAppointment = /* GraphQL */ `
  subscription OnUpdateAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onUpdateAppointment(filter: $filter) {
      id
      date
      firstName
      lastName
      phone
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentLocationId
    }
  }
`;
export const onDeleteAppointment = /* GraphQL */ `
  subscription OnDeleteAppointment(
    $filter: ModelSubscriptionAppointmentFilterInput
  ) {
    onDeleteAppointment(filter: $filter) {
      id
      date
      firstName
      lastName
      phone
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      appointmentLocationId
    }
  }
`;
export const onCreateBlackout = /* GraphQL */ `
  subscription OnCreateBlackout($filter: ModelSubscriptionBlackoutFilterInput) {
    onCreateBlackout(filter: $filter) {
      id
      dayOfWeek
      time
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blackoutLocationId
    }
  }
`;
export const onUpdateBlackout = /* GraphQL */ `
  subscription OnUpdateBlackout($filter: ModelSubscriptionBlackoutFilterInput) {
    onUpdateBlackout(filter: $filter) {
      id
      dayOfWeek
      time
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blackoutLocationId
    }
  }
`;
export const onDeleteBlackout = /* GraphQL */ `
  subscription OnDeleteBlackout($filter: ModelSubscriptionBlackoutFilterInput) {
    onDeleteBlackout(filter: $filter) {
      id
      dayOfWeek
      time
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      blackoutLocationId
    }
  }
`;
export const onCreateChatMessage = /* GraphQL */ `
  subscription OnCreateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
  ) {
    onCreateChatMessage(filter: $filter) {
      id
      message
      images
      author
      authorId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomMessagesId
    }
  }
`;
export const onUpdateChatMessage = /* GraphQL */ `
  subscription OnUpdateChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
  ) {
    onUpdateChatMessage(filter: $filter) {
      id
      message
      images
      author
      authorId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomMessagesId
    }
  }
`;
export const onDeleteChatMessage = /* GraphQL */ `
  subscription OnDeleteChatMessage(
    $filter: ModelSubscriptionChatMessageFilterInput
  ) {
    onDeleteChatMessage(filter: $filter) {
      id
      message
      images
      author
      authorId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomMessagesId
    }
  }
`;
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
      id
      name
      messages {
        items {
          id
          message
          images
          author
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomMessagesId
        }
        nextToken
        startedAt
      }
      accessList
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
      id
      name
      messages {
        items {
          id
          message
          images
          author
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomMessagesId
        }
        nextToken
        startedAt
      }
      accessList
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
      id
      name
      messages {
        items {
          id
          message
          images
          author
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomMessagesId
        }
        nextToken
        startedAt
      }
      accessList
      location
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateRewards = /* GraphQL */ `
  subscription OnCreateRewards($filter: ModelSubscriptionRewardsFilterInput) {
    onCreateRewards(filter: $filter) {
      id
      points
      transactions {
        items {
          id
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientTransactionsId
          rewardsTransactionsId
          transactionLocationId
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
export const onUpdateRewards = /* GraphQL */ `
  subscription OnUpdateRewards($filter: ModelSubscriptionRewardsFilterInput) {
    onUpdateRewards(filter: $filter) {
      id
      points
      transactions {
        items {
          id
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientTransactionsId
          rewardsTransactionsId
          transactionLocationId
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
export const onDeleteRewards = /* GraphQL */ `
  subscription OnDeleteRewards($filter: ModelSubscriptionRewardsFilterInput) {
    onDeleteRewards(filter: $filter) {
      id
      points
      transactions {
        items {
          id
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
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientTransactionsId
          rewardsTransactionsId
          transactionLocationId
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
export const onCreateCategoryAttribute = /* GraphQL */ `
  subscription OnCreateCategoryAttribute(
    $filter: ModelSubscriptionCategoryAttributeFilterInput
  ) {
    onCreateCategoryAttribute(filter: $filter) {
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
export const onUpdateCategoryAttribute = /* GraphQL */ `
  subscription OnUpdateCategoryAttribute(
    $filter: ModelSubscriptionCategoryAttributeFilterInput
  ) {
    onUpdateCategoryAttribute(filter: $filter) {
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
export const onDeleteCategoryAttribute = /* GraphQL */ `
  subscription OnDeleteCategoryAttribute(
    $filter: ModelSubscriptionCategoryAttributeFilterInput
  ) {
    onDeleteCategoryAttribute(filter: $filter) {
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
