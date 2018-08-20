const shortid = require('shortid');


let users = [
  {
    id: shortid.generate(),
    firstName: 'Jane',
    lastName: 'Doe'
  },
  {
    id: shortid.generate(),
    firstName: 'John',
    lastName: 'Doe'
  },
  {
    id: shortid.generate(),
    firstName: 'Bolaji',
    lastName: 'Olajide'
  },
  {
    id: shortid.generate(),
    firstName: 'Coop',
    lastName: 'Proton'
  },
];

module.exports = users;
