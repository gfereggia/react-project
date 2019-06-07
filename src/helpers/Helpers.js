import objectPath from 'object-path'

export const dynamicSort = (property) => {
  let sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function(a, b) {
    let result =
      objectPath.get(a, property) < objectPath.get(b, property)
        ? -1
        : objectPath.get(a, property) > objectPath.get(b, property)
        ? 1
        : 0
    return result * sortOrder
  }
}
