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
        writeToFile(data);
        let shape;
        
        if(data.shape[0] == 'Square'){
            shape = new Square()
        }
        else if(data.shape[1] == 'Circle') {
        shape = new Circle() 
        }
        
        else(data.shape[2] == 'Triangle') 
            shape = new Triangle()
            console.log(shape);
    })
        .then((data) => {
            if(data.textColor == 'green' || '#00FF00'){ // is this how to add text color
                
            }
        })
        // writeToFile(data);     
        // console.log(shape);
// function writeToFile(shape) {
//     fs.writeFile("logo.svg", generateSvg(shape, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('generated logo.svg'))   
}
;

init();