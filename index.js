import { config } from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import schema from "./src/schema/index.js";
import http from "http";
import expressJwt from "express-jwt";
config();

const PORT = 4000;

async function startApolloServer() {
  const app = express();

  app.use(
    expressJwt({
      secret: process.env.JWT_SECRET,
      algorithms: [process.env.JWT_HASHING_ALGORITHM],
      credentialsRequired: false,
    })
  );

  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
    context: ({ req }) => {
      const user = req.user || null;
      return {
        user,
      };
    },
  });

  await server.start();

  server.applyMiddleware({ app });

  await new Promise((resolve) => httpServer.listen({ port: PORT }, resolve));

  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  );
}

startApolloServer();
