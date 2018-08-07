const { GraphQLServer } = require('graphql-yoga');
const shortid = require('shortid');

let links = require('./links');


const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    links: () => links,
    link: (_, { id }) => links.find(link => link.id == id)
  },
  Mutation: {
    createLink: (root, args) => {
      const link = {
        id: shortid.generate(),
        description: args.description,
        url: args.url,
      };

      links.push(link);
      return link;
    },
    updateLink: (_, { id, url, description }) => {
      const updatedLink = { id,
        url,
        description
      };

      links = links.map(link => (
        link.id === id ? updatedLink : link
      ));
      return updatedLink;
    },
    deleteLink: (_, { id }) => {
      const filteredLinks = links
        .filter(link => link.id != id);
      return filteredLinks;
    }
  }
};

// 3
const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
