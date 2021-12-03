let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let counter = 0

for (row of a){
    console.log(`${counter++} row`)
    for(num of row){
        console.log(num)
    }
}






let func_1 = (row) => {
    row.forEach(console.log)
  }
  
  let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
  let counter = 0
  
  a.forEach(func_1)
  