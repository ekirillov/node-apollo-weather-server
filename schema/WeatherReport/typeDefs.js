import { gql } from "apollo-server";

export const typeDefs = gql`
  type WeatherReport {
    city: String!
    temperature: Float!
    date: Date!
    weatherCondition: WeatherCondition!
  }

  type WeatherCondition {
    id: Int!
    description: String!
    status: String!
    icon: String!
  }

  extend type Query {
    weatherReport(city: String!): WeatherReport
  }
`;
