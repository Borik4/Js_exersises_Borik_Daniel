let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th","st","nd","rd"]


for (let i = 0; i < color.length-1; i++){
    if (i < 3){
        console.log((i + 1) + o[i + 1] + color[i])
    }else{
        console.log((i + 1) + o[0] + color[i])
    }
}