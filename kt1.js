function chooseName(arr) {
    let para = "";
    para = arr[Math.floor(Math.random() * arr.length)];
    return para;
}
let arrayNames = ["Chien", "Nhan", "Ronaldo", "Messi", "Neymar"];
let chosenName = chooseName(arrayNames);
alert(chosenName);