class Triangle {
    constructor(colorOfShape, colorOfText, text) {
        this.colorOfShape = colorOfShape;
        this.colorOfText = colorOfText;
        this.text = text;
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polygon points="250,60 100,400 400,400" fill=${this.colorOfShape}/>
    fill="${this.colorOfText}">${this.text}<stroke-width="5"/>
    </svg>`
    }
};

module.exports = Triangle;