import { config } from "dotenv";
import { ApolloServer } from "apollo-server";
import schema from "./src/schema/index.js";
config();

const server = new ApolloServer({
  schema: schema,
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
