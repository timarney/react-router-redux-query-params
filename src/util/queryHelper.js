function QueryHelper (query = {}) {
  let anim = true

  if (query.hasOwnProperty('p')) {
    anim = false
  }

  return { anim }
}

module.exports = QueryHelper
