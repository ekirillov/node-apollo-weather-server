import { gql } from "apollo-server";

export const typeDefs = gql`
  extend type Mutation {
    login(email: String!, password: String!): String
  }
`;
