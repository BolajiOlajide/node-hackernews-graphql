const { GraphQLServer } = require('graphql-yoga');
const links = require('./links');
const shortid = require('shortid');


const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
  },
  Mutation: {
    post: (root, args) => {
      const link = {
        id: shortid.generate(),
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
