const inquirer = require('inquirer');
// const { readFile, writeFile } = require('fs/promises');
const fs = require('fs');
const Triangle = require('./lib/shapes.js');
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
    return inquirer.prompt(questions)
    .then((res) => {
        var data = JSON.stringify(res);
        // writeToFile(data);
        let shape;
        
        if(data.shape == 'Square'){
            shape = new Square()
            
        }
        else if(data.shape == 'Circle') {
        shape = new Circle() 
        }
        
        else(data.shape == 'Triangle') 
            shape = new Triangle()        
    })
    .then((shape) => {
        return fs.writeFile('.svg', shape, null, (err) =>
            err ? console.error(err) : console.log('generated logo.svg'))
    })
    // .then(() => {
    //     console.log('generated logo.svg');
    // })
            

        // })
        // writeToFile(data);     
        // console.log(shape);
// function writeToFile(shape) {
//     fs.writeFile("logo.svg", generateSvg(shape, null, '\t'), (err) =>
//         err ? console.log(err) : console.log('generated logo.svg'))   
};
init();