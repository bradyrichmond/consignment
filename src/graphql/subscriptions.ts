/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
export const onCreateItem = /* GraphQL */ `
  subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
    onCreateItem(filter: $filter) {
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
export const onUpdateItem = /* GraphQL */ `
  subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
    onUpdateItem(filter: $filter) {
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
export const onDeleteItem = /* GraphQL */ `
  subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
    onDeleteItem(filter: $filter) {
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
