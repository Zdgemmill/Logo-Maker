//importing modules
import fs from 'fs';
import inquirer from 'inquirer';
import { drawCircle, drawTriangle, drawSquare } from './lib/shapes.mjs';

//prompt user for logo selections
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter three leters for your logo.',
            name: 'letters',
        },
        {
            type: 'input',
            message: 'Please enter three leters for your logo.',
            name: 'letters',
        },
        {
            type: 'input',
            message: 'Please enter three leters for your logo.',
            name: 'letters',
        },

    ])
    .then((response) =>
        generateReadme(response)

    );


function generateReadme(data) {
    const filename = '.SVG'

    fs.writeFile(filename, readmeContent, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`${filename} successfully generated!`);
        }
    });
}
