import express from 'express';
const helmet = require("helmet");

// const express = require("express");
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

  const myPlugin = {

    // Fires whenever a GraphQL request is received from a client.
    requestDidStart(requestContext: any) {
      console.log('Request started! Query:\n', requestContext.request);

      return {

        // Fires whenever Apollo Server will parse a GraphQL
        // request to create its associated document AST.
        parsingDidStart(requestContext: any) {
          console.log('Parsing started!', requestContext.request);
        },

        // Fires whenever Apollo Server will validate a
        // request's document AST against your GraphQL schema.
        validationDidStart(requestContext: any) {
          console.log('Validation started!', requestContext.request);
        },
      }
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (ctx: any) => {
      // { req }: { req: express.Request }
      // Note: This example uses the `req` argument to access headers,
      // but the arguments received by `context` vary by integration.
      // This means they vary for Express, Koa, Lambda, etc.
      //
      // To find out the correct arguments for a specific integration,
      // see https://www.apollographql.com/docs/apollo-server/api/apollo-server/#middleware-specific-context-fields

      // Get the user token from the headers.
      const request: express.Request = ctx.req as express.Request;
      const token = request.headers.authorization || '';

      // Try to retrieve a user with the token
      const user = 'foyzulkarim-' + new Date().getTime();

      // Add the user to the context
      return { user };
    },
    plugins: [
      myPlugin
    ]
  });
  await server.start();

  const log = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.log(req.query);
    next();
  }

  const app = express();
  app.use(helmet());
  app.use(log);
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen(4000, (): void => { resolve(new Date()) }));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
