const inquirer = require('inquirer');
// const { readFile, writeFile } = require('fs/promises');
const fs = require('fs');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');
const Circle = require('./lib/circle.js');
// const SVG = require('./lib/svg.js');
var userShape;

const questions = [{
    type: 'input',
    name: 'text',
    message: 'What text would you like for the logo?'
},
{
    type: 'input',
    name: 'textColor',
    message: 'What color would you like the text?',
},
{
    type: 'list',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['Square', 'Circle', 'Triangle'],
}];

function init() {
    return inquirer.prompt(questions)
        .then((res) => {
            console.log(res);
            
            if (res.shape == 'Square') {
               userShape = new Square()
          

            }
            else if (res.shape == 'Circle') {
                userShape = new Circle()
               
            }
            if (res.shape == 'Triangle') {
                userShape = new Triangle()
            }

            return fs.writeFile('logo.svg', userShape, (err) =>
            err ? console.error(err) : console.log('generated logo.svg'))
           
        })
        // .then((userShape) => {

        // //         console.log(userShape)
        //     // const svg = new SVG(svg.userShape, svg.colorOfShape, svg.colorOftext, svg.text);
        //     // console.log('this is the SVG', svg)

        //     // svg.setShape(userShape);
        //     // svg.setText(text, colorOftext);
        //     // svg.render(svg);
            
            
           
        // })
        // .then(() => {
        //     console.log('logo.svg generated');
        // })
        // return fs.writeFile('logo.svg', userShape, null, (err) =>
        //     err ? console.error(err) : console.log('generated logo.svg'))
    //         })
    //         writeToFile(data);     
    //         console.log(shape);
    // function writeToFile(shape) {
    //     fs.writeFile("logo.svg", generateSvg(shape, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('generated logo.svg'))   

};
init();