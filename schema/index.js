import { gql, makeExecutableSchema } from "apollo-server";
import merge from "lodash/merge.js";
import {
  typeDefs as WeatherReportTypeDefs,
  resolvers as WeatherReportResolvers,
} from "./WeatherReport/index.js";
import {
  typeDefs as DateScalarTypeDefs,
  resolvers as DateScalarResolvers,
} from "./scalars/date.js";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const defaultResolversResolvers = {};

export default makeExecutableSchema({
  typeDefs: [Query, WeatherReportTypeDefs, DateScalarTypeDefs],
  resolvers: merge(
    defaultResolversResolvers,
    WeatherReportResolvers,
    DateScalarResolvers
  ),
});
