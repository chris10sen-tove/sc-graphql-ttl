import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// schema
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
      title: 'Cosmos',
      author: 'Carl Sagan',
    },
    {
      title: 'Cosmopolis',
      author: 'Don DeLillo',
    },
  ];