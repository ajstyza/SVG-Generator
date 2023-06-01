const inquirer = require('inquirer');
const fs = require('fs');
const Triangle = require ('./lib/shapes.js');
const Square = require('./lib/shapes.js');
const Circle = require('./lib/shapes.js');

const questions = [{
    type: 'input',
    name: 'text',
    message:'What text would you like for the logo?'
},  
{   type: 'input',
    name: 'textColor',
    message: 'What color would you like the text?',
},
    {
    type: 'checkbox',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['Square', 'Circle', 'Triangle']
}];

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log('generated logo.svg', data);
        let shape = new Square(data);
        
        shape.render();
        // writeToFile(data);
        
    })
};

// function writeToFile(data) {
//     fs.writeFile("logo.svg", generateSvg(data, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('generated logo.svg'))   
// };

init();