/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserLevel = /* GraphQL */ `
  mutation CreateUserLevel(
    $input: CreateUserLevelInput!
    $condition: ModelUserLevelConditionInput
  ) {
    createUserLevel(input: $input, condition: $condition) {
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
export const updateUserLevel = /* GraphQL */ `
  mutation UpdateUserLevel(
    $input: UpdateUserLevelInput!
    $condition: ModelUserLevelConditionInput
  ) {
    updateUserLevel(input: $input, condition: $condition) {
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
export const deleteUserLevel = /* GraphQL */ `
  mutation DeleteUserLevel(
    $input: DeleteUserLevelInput!
    $condition: ModelUserLevelConditionInput
  ) {
    deleteUserLevel(input: $input, condition: $condition) {
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
export const createOrganization = /* GraphQL */ `
  mutation CreateOrganization(
    $input: CreateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    createOrganization(input: $input, condition: $condition) {
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
export const updateOrganization = /* GraphQL */ `
  mutation UpdateOrganization(
    $input: UpdateOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    updateOrganization(input: $input, condition: $condition) {
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
export const deleteOrganization = /* GraphQL */ `
  mutation DeleteOrganization(
    $input: DeleteOrganizationInput!
    $condition: ModelOrganizationConditionInput
  ) {
    deleteOrganization(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
export const createTender = /* GraphQL */ `
  mutation CreateTender(
    $input: CreateTenderInput!
    $condition: ModelTenderConditionInput
  ) {
    createTender(input: $input, condition: $condition) {
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
export const updateTender = /* GraphQL */ `
  mutation UpdateTender(
    $input: UpdateTenderInput!
    $condition: ModelTenderConditionInput
  ) {
    updateTender(input: $input, condition: $condition) {
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
export const deleteTender = /* GraphQL */ `
  mutation DeleteTender(
    $input: DeleteTenderInput!
    $condition: ModelTenderConditionInput
  ) {
    deleteTender(input: $input, condition: $condition) {
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
export const createConsignerSplit = /* GraphQL */ `
  mutation CreateConsignerSplit(
    $input: CreateConsignerSplitInput!
    $condition: ModelConsignerSplitConditionInput
  ) {
    createConsignerSplit(input: $input, condition: $condition) {
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
export const updateConsignerSplit = /* GraphQL */ `
  mutation UpdateConsignerSplit(
    $input: UpdateConsignerSplitInput!
    $condition: ModelConsignerSplitConditionInput
  ) {
    updateConsignerSplit(input: $input, condition: $condition) {
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
export const deleteConsignerSplit = /* GraphQL */ `
  mutation DeleteConsignerSplit(
    $input: DeleteConsignerSplitInput!
    $condition: ModelConsignerSplitConditionInput
  ) {
    deleteConsignerSplit(input: $input, condition: $condition) {
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
export const createCoupon = /* GraphQL */ `
  mutation CreateCoupon(
    $input: CreateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    createCoupon(input: $input, condition: $condition) {
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
export const updateCoupon = /* GraphQL */ `
  mutation UpdateCoupon(
    $input: UpdateCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    updateCoupon(input: $input, condition: $condition) {
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
export const deleteCoupon = /* GraphQL */ `
  mutation DeleteCoupon(
    $input: DeleteCouponInput!
    $condition: ModelCouponConditionInput
  ) {
    deleteCoupon(input: $input, condition: $condition) {
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
export const createAppointment = /* GraphQL */ `
  mutation CreateAppointment(
    $input: CreateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    createAppointment(input: $input, condition: $condition) {
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
export const updateAppointment = /* GraphQL */ `
  mutation UpdateAppointment(
    $input: UpdateAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    updateAppointment(input: $input, condition: $condition) {
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
export const deleteAppointment = /* GraphQL */ `
  mutation DeleteAppointment(
    $input: DeleteAppointmentInput!
    $condition: ModelAppointmentConditionInput
  ) {
    deleteAppointment(input: $input, condition: $condition) {
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
export const createBlackout = /* GraphQL */ `
  mutation CreateBlackout(
    $input: CreateBlackoutInput!
    $condition: ModelBlackoutConditionInput
  ) {
    createBlackout(input: $input, condition: $condition) {
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
export const updateBlackout = /* GraphQL */ `
  mutation UpdateBlackout(
    $input: UpdateBlackoutInput!
    $condition: ModelBlackoutConditionInput
  ) {
    updateBlackout(input: $input, condition: $condition) {
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
export const deleteBlackout = /* GraphQL */ `
  mutation DeleteBlackout(
    $input: DeleteBlackoutInput!
    $condition: ModelBlackoutConditionInput
  ) {
    deleteBlackout(input: $input, condition: $condition) {
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
export const createChatMessage = /* GraphQL */ `
  mutation CreateChatMessage(
    $input: CreateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    createChatMessage(input: $input, condition: $condition) {
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
export const updateChatMessage = /* GraphQL */ `
  mutation UpdateChatMessage(
    $input: UpdateChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    updateChatMessage(input: $input, condition: $condition) {
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
export const deleteChatMessage = /* GraphQL */ `
  mutation DeleteChatMessage(
    $input: DeleteChatMessageInput!
    $condition: ModelChatMessageConditionInput
  ) {
    deleteChatMessage(input: $input, condition: $condition) {
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
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
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
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
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
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
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
export const createRewards = /* GraphQL */ `
  mutation CreateRewards(
    $input: CreateRewardsInput!
    $condition: ModelRewardsConditionInput
  ) {
    createRewards(input: $input, condition: $condition) {
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
export const updateRewards = /* GraphQL */ `
  mutation UpdateRewards(
    $input: UpdateRewardsInput!
    $condition: ModelRewardsConditionInput
  ) {
    updateRewards(input: $input, condition: $condition) {
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
export const deleteRewards = /* GraphQL */ `
  mutation DeleteRewards(
    $input: DeleteRewardsInput!
    $condition: ModelRewardsConditionInput
  ) {
    deleteRewards(input: $input, condition: $condition) {
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
export const createPickUp = /* GraphQL */ `
  mutation CreatePickUp(
    $input: CreatePickUpInput!
    $condition: ModelPickUpConditionInput
  ) {
    createPickUp(input: $input, condition: $condition) {
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
export const updatePickUp = /* GraphQL */ `
  mutation UpdatePickUp(
    $input: UpdatePickUpInput!
    $condition: ModelPickUpConditionInput
  ) {
    updatePickUp(input: $input, condition: $condition) {
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
export const deletePickUp = /* GraphQL */ `
  mutation DeletePickUp(
    $input: DeletePickUpInput!
    $condition: ModelPickUpConditionInput
  ) {
    deletePickUp(input: $input, condition: $condition) {
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
export const createConsignmentDropoff = /* GraphQL */ `
  mutation CreateConsignmentDropoff(
    $input: CreateConsignmentDropoffInput!
    $condition: ModelConsignmentDropoffConditionInput
  ) {
    createConsignmentDropoff(input: $input, condition: $condition) {
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
export const updateConsignmentDropoff = /* GraphQL */ `
  mutation UpdateConsignmentDropoff(
    $input: UpdateConsignmentDropoffInput!
    $condition: ModelConsignmentDropoffConditionInput
  ) {
    updateConsignmentDropoff(input: $input, condition: $condition) {
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
export const deleteConsignmentDropoff = /* GraphQL */ `
  mutation DeleteConsignmentDropoff(
    $input: DeleteConsignmentDropoffInput!
    $condition: ModelConsignmentDropoffConditionInput
  ) {
    deleteConsignmentDropoff(input: $input, condition: $condition) {
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
export const createCubby = /* GraphQL */ `
  mutation CreateCubby(
    $input: CreateCubbyInput!
    $condition: ModelCubbyConditionInput
  ) {
    createCubby(input: $input, condition: $condition) {
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
export const updateCubby = /* GraphQL */ `
  mutation UpdateCubby(
    $input: UpdateCubbyInput!
    $condition: ModelCubbyConditionInput
  ) {
    updateCubby(input: $input, condition: $condition) {
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
export const deleteCubby = /* GraphQL */ `
  mutation DeleteCubby(
    $input: DeleteCubbyInput!
    $condition: ModelCubbyConditionInput
  ) {
    deleteCubby(input: $input, condition: $condition) {
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
