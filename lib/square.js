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

module.exports = Square;