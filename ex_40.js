function array_creater(start, len){
arr = []
for(i = 0; i < len; i++){
    arr[i] = start++
}
return arr
}

console.log(array_creater(10, 100))