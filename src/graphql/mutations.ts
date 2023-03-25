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
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
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
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
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
export const createItem = /* GraphQL */ `
  mutation CreateItem(
    $input: CreateItemInput!
    $condition: ModelItemConditionInput
  ) {
    createItem(input: $input, condition: $condition) {
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
export const updateItem = /* GraphQL */ `
  mutation UpdateItem(
    $input: UpdateItemInput!
    $condition: ModelItemConditionInput
  ) {
    updateItem(input: $input, condition: $condition) {
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
export const deleteItem = /* GraphQL */ `
  mutation DeleteItem(
    $input: DeleteItemInput!
    $condition: ModelItemConditionInput
  ) {
    deleteItem(input: $input, condition: $condition) {
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
