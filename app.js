const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");

const http = require("http");

const app = express();

const typeDefs = gql`
  type Query {
    greet: String!
  }
`;
const resolvers = {
  Query: {
    greet: () => "Hello World!",
  },
};

let apolloServer = null;
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });
}
startServer();
const httpserver = http.createServer(app);

app.get("/rest", function (req, res) {
  res.json({ data: "api working" });
});

app.listen({ port: 5000 }, function () {
  console.log(`server running on port 5000 `);
  console.log(`gql path is ${apolloServer.graphqlPath}`);
});
