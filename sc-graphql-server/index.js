import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// Schema
const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  # The "books" query returns an array of zero or more Books (defined above)
  type Query {
    books: [Book]
  }
`;

const books = [
    {
      title: 'Cosmopolis',
      author: 'Don DeLillo',
    },
    {
      title: 'Cosmos',
      author: 'Carl Sagan',
    },
  ];

// Resolvers
// This resolver retrieves books from the "books" array above
const resolvers = {
  Query: {
    books: () => books,
  },
};

// ApolloServer constructor
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);