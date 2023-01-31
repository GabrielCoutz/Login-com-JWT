import { ApolloServer, gql } from "apollo-server";
import { GraphQLClient } from "graphql-request";
import { userResolvers } from "./user/resolver";
import { userTypeDef } from "./user/typedef";
import { loginTypeDef } from "./login/typedef";
import { loginResolvers } from "./login/resolver";
import context from "./context";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }

  type Mutation {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },

  Mutation: {
    _empty: () => true,
  },
};

const client = new GraphQLClient(process.env.BASE_URL);

const typeDefs = [rootTypeDefs, userTypeDef, loginTypeDef];
const resolvers = [rootResolvers, userResolvers, loginResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003);

export default client;
