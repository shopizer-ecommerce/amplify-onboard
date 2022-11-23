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
export const createHotel = /* GraphQL */ `
  mutation CreateHotel(
    $input: CreateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    createHotel(input: $input, condition: $condition) {
      id
      hotelID
      locale
      code
      name
      address
      city
      postalCode
      province
      country
      phone
      image
      _version
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateHotel = /* GraphQL */ `
  mutation UpdateHotel(
    $input: UpdateHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    updateHotel(input: $input, condition: $condition) {
      id
      hotelID
      locale
      code
      name
      address
      city
      postalCode
      province
      country
      phone
      image
      _version
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteHotel = /* GraphQL */ `
  mutation DeleteHotel(
    $input: DeleteHotelInput!
    $condition: ModelHotelConditionInput
  ) {
    deleteHotel(input: $input, condition: $condition) {
      id
      hotelID
      locale
      code
      name
      address
      city
      postalCode
      province
      country
      phone
      image
      _version
      createdAt
      updatedAt
      owner
    }
  }
`;
