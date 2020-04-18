export const schema = gql`
  type Stream {
    id: Int!
    createdAt: DateTime!
    title: String!
    body: String!
    when: DateTime!
    link: String!
    author: User
    authorId: Int
  }

  type Query {
    streams: [Stream!]!
    stream(id: Int!): Stream!
  }

  input CreateStreamInput {
    title: String!
    body: String!
    when: DateTime!
    link: String!
    authorId: Int
  }

  input UpdateStreamInput {
    title: String
    body: String
    when: DateTime
    link: String
    authorId: Int
  }

  type Mutation {
    createStream(input: CreateStreamInput!): Stream!
    updateStream(id: Int!, input: UpdateStreamInput!): Stream!
    deleteStream(id: Int!): Stream!
  }
`
