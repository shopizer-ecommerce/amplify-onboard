/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($owner: String) {
    onCreateUser(owner: $owner) {
      id
      locale
      email
      name
      internalId
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($owner: String) {
    onUpdateUser(owner: $owner) {
      id
      locale
      email
      name
      internalId
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($owner: String) {
    onDeleteUser(owner: $owner) {
      id
      locale
      email
      name
      internalId
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
export const onCreateHotel = /* GraphQL */ `
  subscription OnCreateHotel($owner: String) {
    onCreateHotel(owner: $owner) {
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
export const onUpdateHotel = /* GraphQL */ `
  subscription OnUpdateHotel($owner: String) {
    onUpdateHotel(owner: $owner) {
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
export const onDeleteHotel = /* GraphQL */ `
  subscription OnDeleteHotel($owner: String) {
    onDeleteHotel(owner: $owner) {
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
