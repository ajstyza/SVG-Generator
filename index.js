const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require ('./lib/shapes.js');

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
    type: 'input',
    name: 'shape',
    message: 'What shape would you like to use?',
    choices: ['Square', 'Circle', 'Triangle']
}];

function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data);
        writeToFile(data);
    })
};

function writeToFile(data) {
    fs.writeFile("logo.svg", generateSvg(data, null, '\t'), (err) =>
        err ? console.log(err) : console.log('generated logo.svg'))   
};

init();