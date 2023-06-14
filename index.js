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
            
            if (res.shape === 'Square') {
               userShape = new Square()

            }
            else if (res.shape === 'Circle') {
                userShape = new Circle()

            }
            else userShape = new Triangle() 
                        
            return fs.writeFile('logo.svg', userShape.render(), (err) =>
            err ? console.log(err) : console.log('logo.svg generated'))  
        }) 

};
init();