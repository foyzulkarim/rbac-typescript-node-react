const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");

async function startApolloServer() {
  // Construct a schema, using GraphQL schema language

  const typeDefs = gql`
    type Book {
      title: String
      author: String
    }

    type Query {
      hello: String
      books: [Book]
    }

    type Mutation {
      addBook(title: String, author: String): Boolean
    }
  `;

  const books: any[] = [
    {
      title: "The Awakening",
      author: "Kate Chopin",
    },
    {
      title: "City of Glass",
      author: "Paul Auster",
    },
  ];

  // Provide resolver functions for your schema fields
  const resolvers = {
    Query: {
      hello: () => `Hello world! ${new Date()}`,
      books: () => books,
    },
    Mutation: {
      addBook: (parent: any, book: any): Boolean => {
        console.log(parent, book);
        books.push(book);
        console.log(books);
        return true;
      },
    },
  };

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
