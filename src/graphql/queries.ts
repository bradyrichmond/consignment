/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserLevel = /* GraphQL */ `
  query GetUserLevel($id: ID!) {
    getUserLevel(id: $id) {
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
export const listUserLevels = /* GraphQL */ `
  query ListUserLevels(
    $filter: ModelUserLevelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserLevels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUserLevels = /* GraphQL */ `
  query SyncUserLevels(
    $filter: ModelUserLevelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserLevels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getOrganization = /* GraphQL */ `
  query GetOrganization($id: ID!) {
    getOrganization(id: $id) {
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
export const listOrganizations = /* GraphQL */ `
  query ListOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrganizations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncOrganizations = /* GraphQL */ `
  query SyncOrganizations(
    $filter: ModelOrganizationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrganizations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
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
        credit {
          id
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storeCreditOrganizationId
        }
        transactions {
          nextToken
          startedAt
        }
        rewards {
          id
          points
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
        credit {
          id
          amount
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          storeCreditOrganizationId
        }
        transactions {
          nextToken
          startedAt
        }
        rewards {
          id
          points
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
      nextToken
      startedAt
    }
  }
`;
export const getStoreCredit = /* GraphQL */ `
  query GetStoreCredit($id: ID!) {
    getStoreCredit(id: $id) {
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
export const listStoreCredits = /* GraphQL */ `
  query ListStoreCredits(
    $filter: ModelStoreCreditFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStoreCredits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStoreCredits = /* GraphQL */ `
  query SyncStoreCredits(
    $filter: ModelStoreCreditFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStoreCredits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          categoryOrganizationId
        }
        location {
          id
          locationId
          locationName
          taxRate
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
          categoryOrganizationId
        }
        location {
          id
          locationId
          locationName
          taxRate
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
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
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
export const listTransactions = /* GraphQL */ `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
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
          taxRate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationAddressId
          locationOrganizationId
        }
        tenders {
          nextToken
          startedAt
        }
        coupons {
          nextToken
          startedAt
        }
        missingItems {
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
        clientTransactionsId
        rewardsTransactionsId
        transactionLocationId
        transactionOrganizationId
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
        items {
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
          taxRate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          locationAddressId
          locationOrganizationId
        }
        tenders {
          nextToken
          startedAt
        }
        coupons {
          nextToken
          startedAt
        }
        missingItems {
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
        clientTransactionsId
        rewardsTransactionsId
        transactionLocationId
        transactionOrganizationId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTender = /* GraphQL */ `
  query GetTender($id: ID!) {
    getTender(id: $id) {
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
export const listTenders = /* GraphQL */ `
  query ListTenders(
    $filter: ModelTenderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        label
        receivedAmount
        giftCardId
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
  }
`;
export const syncTenders = /* GraphQL */ `
  query SyncTenders(
    $filter: ModelTenderFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTenders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        label
        receivedAmount
        giftCardId
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
      nextToken
      startedAt
    }
  }
`;
export const getConsignerSplit = /* GraphQL */ `
  query GetConsignerSplit($id: ID!) {
    getConsignerSplit(id: $id) {
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
export const listConsignerSplits = /* GraphQL */ `
  query ListConsignerSplits(
    $filter: ModelConsignerSplitFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsignerSplits(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        consignerPercentage
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
        consignerSplitOrganizationId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConsignerSplits = /* GraphQL */ `
  query SyncConsignerSplits(
    $filter: ModelConsignerSplitFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsignerSplits(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        consignerPercentage
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
        consignerSplitOrganizationId
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
          attributeTypeOrganizationId
        }
        attributeTypeValueId
        attributeTypeValue
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
        attributeTypeValueAttributeTypeId
        attributeTypeValueOrganizationId
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
          attributeTypeOrganizationId
        }
        attributeTypeValueId
        attributeTypeValue
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
        attributeTypeValueAttributeTypeId
        attributeTypeValueOrganizationId
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
      nextToken
      startedAt
    }
  }
`;
export const getGiftCard = /* GraphQL */ `
  query GetGiftCard($id: ID!) {
    getGiftCard(id: $id) {
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
export const listGiftCards = /* GraphQL */ `
  query ListGiftCards(
    $filter: ModelGiftCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGiftCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncGiftCards = /* GraphQL */ `
  query SyncGiftCards(
    $filter: ModelGiftCardFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGiftCards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getGiftCardLog = /* GraphQL */ `
  query GetGiftCardLog($id: ID!) {
    getGiftCardLog(id: $id) {
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
export const listGiftCardLogs = /* GraphQL */ `
  query ListGiftCardLogs(
    $filter: ModelGiftCardLogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGiftCardLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncGiftCardLogs = /* GraphQL */ `
  query SyncGiftCardLogs(
    $filter: ModelGiftCardLogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGiftCardLogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCoupon = /* GraphQL */ `
  query GetCoupon($id: ID!) {
    getCoupon(id: $id) {
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
export const listCoupons = /* GraphQL */ `
  query ListCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCoupons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        type
        amount
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
        transactionCouponsId
        couponOrganizationId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCoupons = /* GraphQL */ `
  query SyncCoupons(
    $filter: ModelCouponFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCoupons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        type
        amount
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
        transactionCouponsId
        couponOrganizationId
      }
      nextToken
      startedAt
    }
  }
`;
export const getAppointment = /* GraphQL */ `
  query GetAppointment($id: ID!) {
    getAppointment(id: $id) {
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
export const listAppointments = /* GraphQL */ `
  query ListAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAppointments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        firstName
        lastName
        phone
        location {
          id
          locationId
          locationName
          taxRate
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
      nextToken
      startedAt
    }
  }
`;
export const syncAppointments = /* GraphQL */ `
  query SyncAppointments(
    $filter: ModelAppointmentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAppointments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        date
        firstName
        lastName
        phone
        location {
          id
          locationId
          locationName
          taxRate
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
      nextToken
      startedAt
    }
  }
`;
export const getBlackout = /* GraphQL */ `
  query GetBlackout($id: ID!) {
    getBlackout(id: $id) {
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
export const listBlackouts = /* GraphQL */ `
  query ListBlackouts(
    $filter: ModelBlackoutFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBlackouts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dayOfWeek
        time
        location {
          id
          locationId
          locationName
          taxRate
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
      nextToken
      startedAt
    }
  }
`;
export const syncBlackouts = /* GraphQL */ `
  query SyncBlackouts(
    $filter: ModelBlackoutFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBlackouts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dayOfWeek
        time
        location {
          id
          locationId
          locationName
          taxRate
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
      nextToken
      startedAt
    }
  }
`;
export const getChatMessage = /* GraphQL */ `
  query GetChatMessage($id: ID!) {
    getChatMessage(id: $id) {
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
export const listChatMessages = /* GraphQL */ `
  query ListChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        images
        author {
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
        authorId
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
        chatRoomMessagesId
        chatMessageAuthorId
        chatMessageOrganizationId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncChatMessages = /* GraphQL */ `
  query SyncChatMessages(
    $filter: ModelChatMessageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message
        images
        author {
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
        authorId
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
        chatRoomMessagesId
        chatMessageAuthorId
        chatMessageOrganizationId
      }
      nextToken
      startedAt
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        messages {
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
      nextToken
      startedAt
    }
  }
`;
export const syncChatRooms = /* GraphQL */ `
  query SyncChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChatRooms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        messages {
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
      nextToken
      startedAt
    }
  }
`;
export const getRewards = /* GraphQL */ `
  query GetRewards($id: ID!) {
    getRewards(id: $id) {
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
export const listRewards = /* GraphQL */ `
  query ListRewards(
    $filter: ModelRewardsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRewards = /* GraphQL */ `
  query SyncRewards(
    $filter: ModelRewardsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRewards(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPickUp = /* GraphQL */ `
  query GetPickUp($id: ID!) {
    getPickUp(id: $id) {
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
export const listPickUps = /* GraphQL */ `
  query ListPickUps(
    $filter: ModelPickUpFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPickUps(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        items {
          nextToken
          startedAt
        }
        location {
          id
          locationId
          locationName
          taxRate
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
      nextToken
      startedAt
    }
  }
`;
export const syncPickUps = /* GraphQL */ `
  query SyncPickUps(
    $filter: ModelPickUpFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPickUps(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        items {
          nextToken
          startedAt
        }
        location {
          id
          locationId
          locationName
          taxRate
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
          categoryOrganizationId
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
          attributeTypeOrganizationId
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
          categoryOrganizationId
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
          attributeTypeOrganizationId
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
          categoryOrganizationId
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
          attributeTypeOrganizationId
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
          categoryOrganizationId
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
          attributeTypeOrganizationId
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
export const getConsignmentDropoff = /* GraphQL */ `
  query GetConsignmentDropoff($id: ID!) {
    getConsignmentDropoff(id: $id) {
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
export const listConsignmentDropoffs = /* GraphQL */ `
  query ListConsignmentDropoffs(
    $filter: ModelConsignmentDropoffFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsignmentDropoffs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncConsignmentDropoffs = /* GraphQL */ `
  query SyncConsignmentDropoffs(
    $filter: ModelConsignmentDropoffFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConsignmentDropoffs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCubby = /* GraphQL */ `
  query GetCubby($id: ID!) {
    getCubby(id: $id) {
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
export const listCubbies = /* GraphQL */ `
  query ListCubbies(
    $filter: ModelCubbyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCubbies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCubbies = /* GraphQL */ `
  query SyncCubbies(
    $filter: ModelCubbyFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCubbies(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
