class Circle  {
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
module.exports = Circle;