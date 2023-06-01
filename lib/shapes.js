class Square {
    constructor(colorOfShape, colorOfText, text) {
        this.colorOfShape = colorOfShape;
        this.colorOfText = colorOfText;
        this.text = text;
    }
render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="30" height="30" stroke="black" fill=${this.colorOfShape}stroke-width="5"/>
    <text xmlns="http://www.w3.org/2000/svg" x="150" y="125" font-size="60" text-anchor="middle" fill=${this.colorOfText}>${this.text}</text>
    </svg>`
}
};
class Circle {
    constructor(colorOfShape, colorOfText, text) {
        this.colorOfShape = colorOfShape;
        this.colorOfText = colorOfText;
        this.text = text;
}
render() {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="red" fill=${this.colorOfShape}stroke-width="5"/>
    <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill=${this.colorOfText}>${this.text}</text>
    </svg>`

}
};

class Triangle {
    constructor(colorOfShape, colorOfText, text) {
        this.colorOfShape = colorOfShape;
        this.colorOfText = colorOfText;
        this.text = text;
}
render() {
    return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="black" fill="${this.colorOfText}>${this.text}<stroke-width="5"/>
    </svg>`

}
};


module.exports = Square;
module.exports = Circle;
module.exports = Triangle; 