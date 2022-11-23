/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getHotel = /* GraphQL */ `
  query GetHotel($id: ID!) {
    getHotel(id: $id) {
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
export const listHotels = /* GraphQL */ `
  query ListHotels(
    $id: ID
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHotels(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const userByEmail = /* GraphQL */ `
  query UserByEmail(
    $email: AWSEmail!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
export const locale = /* GraphQL */ `
  query Locale(
    $locale: String!
    $sortDirection: ModelSortDirection
    $filter: ModelHotelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    locale(
      locale: $locale
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
