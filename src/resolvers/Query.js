function feed(parent, args, context, info) {
  return context.db.query.links({}, info)
}

function link(parent, args, context, info) {
  return context.db.query.links({}, info)
}

function users(parent, args, context, info) {
  return context.db.query.users({}, info)
}

module.exports = {
  feed,
  users
}
