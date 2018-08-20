const shortid = require('shortid');


let links = [
  {
    id: shortid.generate(),
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: shortid.generate(),
    url: 'www.facebook.com',
    description: 'Social Network: Facebook'
  }
];

module.exports = links;
