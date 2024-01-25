//importing modules
import fs from 'fs';
import inquirer from 'inquirer';
// import { drawCircle, drawTriangle, drawSquare } from './lib/shapes.mjs';

//prompt user for logo selections
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter three leters for your logo.',
            name: 'letters',
        },
        {
            type: 'list',
            message: 'Please enter three leters for your logo.',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle']

        },
        {
            type: 'input',
            message: 'Please enter your shape color.',
            name: 'shapeColor',
        },
        {
            type: 'input',
            message: 'Please enter a text color.',
            name: 'textColor',
        },

    ])
    //generate logo from response, create
    .then((response) => {
        const svgLogo = generateLogo(response);
        createFile(svgLogo, 'logo.svg');
    });
//function for taking the response and drawing the logo
function generateLogo({ letters, shape, shapeColor, textColor }) {
    let shapeSVG;

    switch (shape) {
        case 'Circle':
            shapeSVG = `<circle cx="50" cy="50" r="40" fill="${shapeColor}" />`;
            break;
        case 'Square':
            shapeSVG = `<rect x="10" y="10" width="100" height="100" fill="${shapeColor}" />`;
            break;
        case 'Triangle':
            shapeSVG = `<polygon points="50,10 90,90 10,90" fill="${shapeColor}" />`;
            break;
        default:
            shapeSVG = '';
    }

    const svgString = `
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
          ${shapeSVG}
          <text x="50" y="60" fill="${textColor}" font-size="20" text-anchor="middle">${letters}</text>
        </svg>
      `;

    return svgString;
}
//function to write the file with the logo
function createFile(svgContent, fileName) {
    fs.writeFileSync(fileName, svgContent);
    console.log(`SVG logo saved to ${fileName}`);
}