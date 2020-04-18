export const schema = gql`
  type Band {
    id: Int!
    createdAt: DateTime!
    active: Boolean
    bandName: String!
    homeTown: String!
    about: String!
    genre: String!
    website: String!
    bandcamp: String!
    instagram: String!
    author: User
    authorId: Int
  }

  type Query {
    bands: [Band!]!
    band(id: Int!): Band!
  }

  input CreateBandInput {
    active: Boolean!
    bandName: String!
    homeTown: String!
    about: String!
    genre: String!
    website: String!
    bandcamp: String!
    instagram: String!
    authorId: Int
  }

  input UpdateBandInput {
    active: Boolean
    bandName: String
    homeTown: String
    about: String
    genre: String
    website: String
    bandcamp: String
    instagram: String
    authorId: Int
  }

  type Mutation {
    createBand(input: CreateBandInput!): Band!
    updateBand(id: Int!, input: UpdateBandInput!): Band!
    deleteBand(id: Int!): Band!
  }
`
