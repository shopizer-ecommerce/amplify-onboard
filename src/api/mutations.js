import { API, graphqlOperation } from "aws-amplify";
import * as mutations from "../graphql/mutations";

const CreateUser = async (email, locale) => {
  const {
    data: { createUser },
  } = await API.graphql(
    graphqlOperation(mutations.createUser, { input: { email, locale } })
  );
  return createUser;
};

const UpdateUser = async ({ id, email, locale, firstName, lastName, address, city, province, country, postalCode, phone, image, agreement, banking, transit, account, verified, hotel, shortId, ext }) => {
  const {
    data: { updateUser },
  } = await API.graphql(
    graphqlOperation(mutations.updateUser, {
      input: {
        id,
        email,
        locale,
        firstName,
        lastName,
        address,
        city,
        province,
        postalCode,
        country,
        phone,
        image,
        agreement,
        banking,
        transit,
        account,
        verified,
        hotel,
        shortId,
        ext
      },
      authMode:"AMAZON_COGNITO_USER_POOLS"
    })
  );
  return updateUser;
};

const Mutations = {
  CreateUser,
  UpdateUser,
};

export default Mutations;
