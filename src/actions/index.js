export function increment (id) {
  console.log(id)
  return { type: 'INCREMENT', id: id }
}
