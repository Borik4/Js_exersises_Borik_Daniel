
const indexOn = (arr, key) =>

  arr.reduce((obj, v) => {
    const { [key]: id, ...data } = v;
    obj[id] = data;
    return obj;
  }, {});
 
// console.log(indexOn([
//   { id: 10, name: 'apple' },
//   { id: 20, name: 'orange' }
// ], x => x.id));

let key = 5, v = { id: 7, 6 : 102}
console.log(v)

const l = { [key]: id, ...data } = v;
console.log(v)
console.log(l)