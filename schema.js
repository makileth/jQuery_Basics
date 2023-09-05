export const typeDefs = `#graphql
type Sandwich {
  id: ID!, 
  name: String!,
  ingredients: [String!]!
  description: String,
  price: Float!
  reviews: [Review!]
}
type Review {
  id: ID!,
  rating: Int!,
  comment: String!
  sandwich: Sandwich!
  author: Author!
}
type Author {
  id: ID!,
  name: String!
  verified: Boolean!
  reviews: [Review!]
}
type Query {
  reviews: [Review]
  review(id: ID!): Review
  sandwiches: [Sandwich]
  sandwich(id: ID!): Sandwich
  authors: [Author]
  author(id: ID!): Author
}

type Mutation {
  addSandwich(name: String!, ingredients: [String!]!, description: String, price: Float!): Sandwich
  deleteSandwich(id: ID!): [Sandwich]
  updateSandwich(id: ID!, name: String, ingredients: [String!], description: String, price: Float): Sandwich
}

 `;
