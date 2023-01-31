import { ApolloServer, gql } from "apollo-server";
import { GraphQLClient } from "graphql-request";
import { userResolvers } from "./user/resolver";
import { userTypeDef } from "./user/typedef";
import context from "./context";

const rootTypeDefs = gql`
  type Query {
    _empty: Boolean
  }
`;

const rootResolvers = {
  Query: {
    _empty: () => true,
  },
};

const client = new GraphQLClient(process.env.BASEURL);

const typeDefs = [rootTypeDefs, userTypeDef];
const resolvers = [rootResolvers, userResolvers];

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

server.listen(4003).then(({ url }) => {
  console.log(`Server listening on url ${url}`);
});

export default client;
