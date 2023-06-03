class Triangle {
    constructor(colorOfShape, colorOfText, text) {
        this.colorOfShape = colorOfShape;
        this.colorOfText = colorOfText;
        this.text = text;
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="black" fill="${this.colorOfText}">${this.text}<stroke-width="5"/>
    </svg>`
    }
};

module.exports = Triangle;