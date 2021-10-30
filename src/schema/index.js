import { gql, makeExecutableSchema } from "apollo-server";
import merge from "lodash/merge.js";
import {
  typeDefs as weatherReportTypeDefs,
  resolvers as weatherReportResolvers,
} from "./weatherReport/index.js";
import {
  typeDefs as DateScalarTypeDefs,
  resolvers as DateScalarResolvers,
} from "./scalars/date.js";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const defaultResolvers = {};

export default makeExecutableSchema({
  typeDefs: [Query, weatherReportTypeDefs, DateScalarTypeDefs],
  resolvers: merge(
    defaultResolvers,
    weatherReportResolvers,
    DateScalarResolvers
  ),
});
