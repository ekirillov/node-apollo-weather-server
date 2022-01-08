import { gql } from "apollo-server";
import { makeExecutableSchema } from "@graphql-tools/schema";
import merge from "lodash/merge.js";
import {
  typeDefs as weatherReportTypeDefs,
  resolvers as weatherReportResolvers,
} from "./weatherReport/index.js";
import {
  typeDefs as loginTypeDefs,
  resolvers as loginResolvers,
} from "./login/index.js";
import {
  typeDefs as DateScalarTypeDefs,
  resolvers as DateScalarResolvers,
} from "./scalars/date.js";

const defaultTypeDefs = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const defaultResolvers = {};

export default makeExecutableSchema({
  typeDefs: [
    defaultTypeDefs,
    weatherReportTypeDefs,
    DateScalarTypeDefs,
    loginTypeDefs,
  ],
  resolvers: merge(
    defaultResolvers,
    weatherReportResolvers,
    DateScalarResolvers,
    loginResolvers
  ),
});
