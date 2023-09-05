
const sandwiches = [
  {
    id: "1",
    name: "Classic BLT",
    ingredients: ["Bacon", "Lettuce", "Tomato", "Mayonnaise", "Bread"],
    description: "A classic bacon, lettuce, and tomato sandwich.",
    price: 7.99,
  },
  {
    id: "2",
    name: "Turkey Club",
    ingredients: ["Turkey", "Bacon", "Lettuce", "Tomato", "Mayonnaise", "Bread"],
    description: "A delicious turkey club sandwich.",
    price: 8.99,
  },
  
];

const reviews = [
  {
    id: "1",
    rating: 5,
    comment: "This sandwich is amazing!",
    sandwich_id: "1",
    author_id: "1",
  },
  {
    id: "2",
    rating: 4,
    comment: "Good sandwich, but a bit pricey.",
    sandwich_id: "2",
    author_id: "2",
  },
  
];

const authors = [
  {
    id: "1",
    name: "John Doe",
    verified: true,
  },
  {
    id: "2",
    name: "Jane Smith",
    verified: false,
  },
 
];

// Export your data
export default {
  sandwiches,
  reviews,
  authors,
};
