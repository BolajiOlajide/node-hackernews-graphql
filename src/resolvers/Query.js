async function feed(parent, args, context, info) {
  const where = args.filter
    ? {
        OR: [
          { url_contains: args.filter },
          { description_contains: args.filter },
        ],
      }
    : {};

  const { skip, first, orderBy } = args;

  const queriedLinks = await context.db.query.links(
    { where, skip, first, orderBy },
    `{ id }`,
  );

  const countSelectionSet = `
    {
      aggregate {
        count
      }
    }
  `;

  const linksConnection = await context.db.query.linksConnection({}, countSelectionSet);

  return {
    count: linksConnection.aggregate.count,
    linkIds: queriedLinks.map(link => link.id),
  }
}


function users(parent, args, context, info) {
  return context.db.query.users({}, info);
};

module.exports = { feed, users };
