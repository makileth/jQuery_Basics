import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

//TODO: resolver
const resolvers = {
  Query: {
    sandwiches() {
      return db.sandwiches;
    },
    sandwich(parent, args) {
      return db.sandwiches.find((sandwich) => sandwich.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(parent, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(parent, args) {
      return db.authors.find((author) => author.id === args.id);
    },
  },
  Sandwich: {
    reviews(parent) {
      return db.reviews.filter((review) => review.sandwich_id === parent.id);
    }
  },
  Author: {
    reviews(parent) {
      return db.reviews.filter((review) => review.author_id === parent.id);
    }
  },
  Review: {
    author(parent) {
      return db.authors.find((author) => author.id === parent.author_id);
    },
    sandwich(parent) {
      return db.sandwiches.find((sandwich) => sandwich.id === parent.sandwich_id);
    }
  },
  Mutation: {
    deleteSandwich(parent, args) {
      db.sandwiches = db.sandwiches.filter((sandwich) => sandwich.id !== args.id);
      
      return db.sandwiches
    },
    addSandwich(parent, args) {
      const newSandwich = {
        id: db.sandwiches.length + 1,
        name: args.name,
        ingredients: args.ingredients,
        description: args.description,
        price: args.price,
      };
      db.sandwiches.push(newSandwich);
      return newSandwich;
    
    },
    updateSandwich(parent, args) {
      const sandwich = db.sandwiches.find((sandwich) => sandwich.id === args.id);
      sandwich.name = args.name;
      sandwich.ingredients = args.ingredients;
      sandwich.description = args.description;
      sandwich.price = args.price;
      return sandwich;
    
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
