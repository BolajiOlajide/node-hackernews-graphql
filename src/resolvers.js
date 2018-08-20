const shortid = require('shortid');

let links = require('./links');
let users = require('./users');

const resolvers = {
  Query: {
    info: () => 'This is the API of a Hackernews Clone',
    links: () => links,
    link: (_, { id }) => links.find(link => link.id == id),
    users: () => users,
    user: (_, { id }) => users.find(user => user.id == id),
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
    },
    createUser: (root, args) => {
      const { firstName, lastName } = args;

      const user = {
        id: shortid.generate(),
        firstName,
        lastName
      };

      users.push(user);
      return user;
    },
    updateUser: (_, { id, firstName, lastName }) => {
      const updatedUser = { id,
        firstName,
        lastName
      };

      users = users.map(user => (
        user.id === id ? updatedUser : user
      ));
      return updatedUser;
    },
    deleteUser: (_, { id }) => {
      const filteredUsers = users
        .filter(user => user.id != id);
      return filteredUsers;
    }
  }
};

module.exports = resolvers;
