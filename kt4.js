class Shape {
    //Ham khoi tao
    constructor (name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    //Phuong thuc
    calcPerimeter(){
        document.write('the perimeter of ' + this.name + ' is ' + this.sides * this.sideLength);
        document.write("<BR>");
    }
}

//Tao 1 instance
let square = new Shape('square', 4, 5);

//Goi phuong thuc
square.calcPerimeter();

//Tao 1 instance khac
let triangle = new Shape('triangle', 3, 3);

//Goi phuong thuc
triangle.calcPerimeter();
