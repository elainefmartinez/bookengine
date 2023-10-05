
const typeDefs = `
  type User{
    _id: ID!
    username: String!
    email: String
    bookCount: Int
    savedBooks [Book]
  }

  type Book {
    bookId: ID!
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User

  }

  type BookInput {
    authors: [String]
    description: String!
    bookId:String!
    title: String!
    image: String
    link: String
  }

  type Query {
    me:User
  }

  type Mutation {
    loginUser (email:String!, password: String!): Auth
    createUser (username: String!, email: String!, password: String! ): Auth
    saveBook (bookData: BookInput!) : User
    deleteBook (bookId: ID!) :User
  }
`;

module.exports = typeDefs;
