/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserLevel = /* GraphQL */ `
  subscription OnCreateUserLevel(
    $filter: ModelSubscriptionUserLevelFilterInput
  ) {
    onCreateUserLevel(filter: $filter) {
      id
      name
      allowedRoutes
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLevelOrganizationId
    }
  }
`;
export const onUpdateUserLevel = /* GraphQL */ `
  subscription OnUpdateUserLevel(
    $filter: ModelSubscriptionUserLevelFilterInput
  ) {
    onUpdateUserLevel(filter: $filter) {
      id
      name
      allowedRoutes
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLevelOrganizationId
    }
  }
`;
export const onDeleteUserLevel = /* GraphQL */ `
  subscription OnDeleteUserLevel(
    $filter: ModelSubscriptionUserLevelFilterInput
  ) {
    onDeleteUserLevel(filter: $filter) {
      id
      name
      allowedRoutes
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userLevelOrganizationId
    }
  }
`;
export const onCreateOrganization = /* GraphQL */ `
  subscription OnCreateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $owner: String
  ) {
    onCreateOrganization(filter: $filter, owner: $owner) {
      id
      name
      users {
        items {
          id
          cognitoId
          disabled
          firstName
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationUsersId
          owner
        }
        nextToken
        startedAt
      }
      logoId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateOrganization = /* GraphQL */ `
  subscription OnUpdateOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $owner: String
  ) {
    onUpdateOrganization(filter: $filter, owner: $owner) {
      id
      name
      users {
        items {
          id
          cognitoId
          disabled
          firstName
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationUsersId
          owner
        }
        nextToken
        startedAt
      }
      logoId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteOrganization = /* GraphQL */ `
  subscription OnDeleteOrganization(
    $filter: ModelSubscriptionOrganizationFilterInput
    $owner: String
  ) {
    onDeleteOrganization(filter: $filter, owner: $owner) {
      id
      name
      users {
        items {
          id
          cognitoId
          disabled
          firstName
          lastName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          organizationUsersId
          owner
        }
        nextToken
        startedAt
      }
      logoId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
      id
      cognitoId
      disabled
      firstName
      lastName
      userLevel {
        id
        name
        allowedRoutes
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userLevelOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationUsersId
      owner
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
      id
      cognitoId
      disabled
      firstName
      lastName
      userLevel {
        id
        name
        allowedRoutes
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userLevelOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationUsersId
      owner
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
      id
      cognitoId
      disabled
      firstName
      lastName
      userLevel {
        id
        name
        allowedRoutes
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userLevelOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      organizationUsersId
      owner
    }
  }
`;
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeCreditOrganizationId
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
          transactionOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rewardsOrganizationId
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientCreditId
      clientRewardsId
      clientOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeCreditOrganizationId
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
          transactionOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rewardsOrganizationId
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientCreditId
      clientRewardsId
      clientOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        storeCreditOrganizationId
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
          transactionOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        rewardsOrganizationId
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientCreditId
      clientRewardsId
      clientOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storeCreditOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storeCreditOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      storeCreditOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        brandOrganizationId
      }
      saleDetailId
      titleChanged
      modifiedBy
      upcCode
      returned
      createTimestamp
      entryTimestamp
      size
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientItemsId
      storeCreditItemsId
      transactionItemsId
      transactionMissingItemsId
      pickUpItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
      itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        brandOrganizationId
      }
      saleDetailId
      titleChanged
      modifiedBy
      upcCode
      returned
      createTimestamp
      entryTimestamp
      size
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientItemsId
      storeCreditItemsId
      transactionItemsId
      transactionMissingItemsId
      pickUpItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
      itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        brandOrganizationId
      }
      saleDetailId
      titleChanged
      modifiedBy
      upcCode
      returned
      createTimestamp
      entryTimestamp
      size
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientItemsId
      storeCreditItemsId
      transactionItemsId
      transactionMissingItemsId
      pickUpItemsId
      itemCategoryId
      itemLocationId
      itemBrandId
      itemOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
          tenderOrganizationId
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
          couponOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientTransactionsId
      rewardsTransactionsId
      transactionLocationId
      transactionOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
          tenderOrganizationId
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
          couponOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientTransactionsId
      rewardsTransactionsId
      transactionLocationId
      transactionOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
          tenderOrganizationId
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
          couponOrganizationId
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      clientTransactionsId
      rewardsTransactionsId
      transactionLocationId
      transactionOrganizationId
    }
  }
`;
export const onCreateTender = /* GraphQL */ `
  subscription OnCreateTender($filter: ModelSubscriptionTenderFilterInput) {
    onCreateTender(filter: $filter) {
      label
      receivedAmount
      giftCardId
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionTendersId
      tenderOrganizationId
    }
  }
`;
export const onUpdateTender = /* GraphQL */ `
  subscription OnUpdateTender($filter: ModelSubscriptionTenderFilterInput) {
    onUpdateTender(filter: $filter) {
      label
      receivedAmount
      giftCardId
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionTendersId
      tenderOrganizationId
    }
  }
`;
export const onDeleteTender = /* GraphQL */ `
  subscription OnDeleteTender($filter: ModelSubscriptionTenderFilterInput) {
    onDeleteTender(filter: $filter) {
      label
      receivedAmount
      giftCardId
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionTendersId
      tenderOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
      locationOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
      locationOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      locationAddressId
      locationOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consignerSplitOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consignerSplitOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      consignerSplitOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      brandOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      brandOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      brandOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeOrganizationId
      }
      attributeTypeValueId
      attributeTypeValue
      lastUpdateTimestamp
      inactive
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeValueAttributeTypeId
      attributeTypeValueOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeOrganizationId
      }
      attributeTypeValueId
      attributeTypeValue
      lastUpdateTimestamp
      inactive
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeValueAttributeTypeId
      attributeTypeValueOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeOrganizationId
      }
      attributeTypeValueId
      attributeTypeValue
      lastUpdateTimestamp
      inactive
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      attributeTypeValueAttributeTypeId
      attributeTypeValueOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
      }
      description
      price
      priceLevel
      sortOrder
      inactive
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryPriceGuideCategoryId
      categoryPriceGuideOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
      }
      description
      price
      priceLevel
      sortOrder
      inactive
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryPriceGuideCategoryId
      categoryPriceGuideOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
      }
      description
      price
      priceLevel
      sortOrder
      inactive
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      categoryPriceGuideCategoryId
      categoryPriceGuideOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      giftCardOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      giftCardOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      giftCardOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        giftCardOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        giftCardOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        giftCardOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionCouponsId
      couponOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionCouponsId
      couponOrganizationId
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
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      transactionCouponsId
      couponOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
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
      author {
        id
        cognitoId
        disabled
        firstName
        lastName
        userLevel {
          id
          name
          allowedRoutes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLevelOrganizationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUsersId
        owner
      }
      authorId
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomMessagesId
      chatMessageAuthorId
      chatMessageOrganizationId
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
      author {
        id
        cognitoId
        disabled
        firstName
        lastName
        userLevel {
          id
          name
          allowedRoutes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLevelOrganizationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUsersId
        owner
      }
      authorId
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomMessagesId
      chatMessageAuthorId
      chatMessageOrganizationId
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
      author {
        id
        cognitoId
        disabled
        firstName
        lastName
        userLevel {
          id
          name
          allowedRoutes
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userLevelOrganizationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        organizationUsersId
        owner
      }
      authorId
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      chatRoomMessagesId
      chatMessageAuthorId
      chatMessageOrganizationId
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
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomMessagesId
          chatMessageAuthorId
          chatMessageOrganizationId
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
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomMessagesId
          chatMessageAuthorId
          chatMessageOrganizationId
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
          authorId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          chatRoomMessagesId
          chatMessageAuthorId
          chatMessageOrganizationId
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
          transactionOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rewardsOrganizationId
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
          transactionOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rewardsOrganizationId
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
          transactionOrganizationId
        }
        nextToken
        startedAt
      }
      organization {
        id
        name
        users {
          nextToken
          startedAt
        }
        logoId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      rewardsOrganizationId
    }
  }
`;
export const onCreatePickUp = /* GraphQL */ `
  subscription OnCreatePickUp($filter: ModelSubscriptionPickUpFilterInput) {
    onCreatePickUp(filter: $filter) {
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pickUpLocationId
    }
  }
`;
export const onUpdatePickUp = /* GraphQL */ `
  subscription OnUpdatePickUp($filter: ModelSubscriptionPickUpFilterInput) {
    onUpdatePickUp(filter: $filter) {
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pickUpLocationId
    }
  }
`;
export const onDeletePickUp = /* GraphQL */ `
  subscription OnDeletePickUp($filter: ModelSubscriptionPickUpFilterInput) {
    onDeletePickUp(filter: $filter) {
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
          size
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          clientItemsId
          storeCreditItemsId
          transactionItemsId
          transactionMissingItemsId
          pickUpItemsId
          itemCategoryId
          itemLocationId
          itemBrandId
          itemOrganizationId
        }
        nextToken
        startedAt
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        locationAddressId
        locationOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      pickUpLocationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        categoryOrganizationId
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
        organization {
          id
          name
          logoId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        attributeTypeOrganizationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
      locationId
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
      locationId
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
      locationId
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
