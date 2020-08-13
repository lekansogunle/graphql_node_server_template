import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

// sample typeDef
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// sample resolver
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
};
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
const port = 4000;

server.applyMiddleware({app, path: '/api'})

app.listen({ port }, () =>
  console.log(`🚀 App running on port ${port}`)
);
