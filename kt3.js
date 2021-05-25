function random(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function chooseName(arr) {
    let para = "";
    para = arr[random(0, arr.length)];
    return para;
}

let arrayNames = ["Chien", "Nhan", "Ronaldo", "Messi", "Neymar"];
let chosenName = chooseName(arrayNames);
document.write(chosenName);
