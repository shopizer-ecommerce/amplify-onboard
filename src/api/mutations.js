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

const UpdateUser = async ({ id, email, locale, firstName, lastName, address, city, province, country, postalCode, phone }) => {
  //const newTodo = await API.graphql({ query: mutations.updateUser, variables: {input: inputData}, authMode: "AMAZON_COGNITO_USER_POOLS" });
  //console.log('Mutation ' + updateUser);
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
        phone
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
