const Triangle = require ('./lib/shapes.js');
const Square = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');

describe('Triangle', () =>{
    it('should be an instance of Triangle class', () => {
        const Triangle = new Triangle();

        expect(Triangle).toBeInstanceOf(Triangle);
    })
});

describe('Square', () =>{
    it('should be an instance of Square class', () => {
        const Square = new Square();

        expect(Square).toBeInstanceOf(Square);
    })
});

describe('Circle', () =>{
    it('should be an instance of Circle class', () => {
        const Circle = new Circle();

        expect(Circle).toBeInstanceOf(Circle);
    })
});