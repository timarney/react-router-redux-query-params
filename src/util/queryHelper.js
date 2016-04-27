function queryHelper (query = {}) {
  let anim = true

  if (query.hasOwnProperty('p')) {
    anim = false
  }

  return { anim }
}

export default queryHelper
