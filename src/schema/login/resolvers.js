import jwt from "jsonwebtoken";
import { config } from "dotenv";
config();

const accounts = [
  {
    id: "testUserId",
    email: "test@test.com",
    password: "password",
    role: "admin",
  },
];

export const resolvers = {
  Mutation: {
    login(_, { email, password }) {
      const { id, role } = accounts.find(
        (account) => account.email === email && account.password === password
      );

      const token = jwt.sign({ role }, process.env.JWT_SECRET, {
        algorithm: process.env.JWT_HASHING_ALGORITHM,
        subject: id,
        expiresIn: "1d",
      });

      return token;
    },
  },
};
