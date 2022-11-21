/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      locale
      email
      name
      birthdate
      firstName
      lastName
      address
      city
      postalCode
      province
      country
      phone
      agreement
      image
      banking
      transit
      account
      verified
      export
      ext
      hotel
      shortId
      _version
      createdAt
      updatedAt
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
      locale
      email
      name
      birthdate
      firstName
      lastName
      address
      city
      postalCode
      province
      country
      phone
      agreement
      image
      banking
      transit
      account
      verified
      export
      ext
      hotel
      shortId
      _version
      createdAt
      updatedAt
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
      locale
      email
      name
      birthdate
      firstName
      lastName
      address
      city
      postalCode
      province
      country
      phone
      agreement
      image
      banking
      transit
      account
      verified
      export
      ext
      hotel
      shortId
      _version
      createdAt
      updatedAt
      owner
    }
  }
`;
