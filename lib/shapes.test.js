const Triangle = require ('./lib/triangle.js');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');

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