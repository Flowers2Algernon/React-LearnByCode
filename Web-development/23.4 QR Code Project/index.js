/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import { input } from '@inquirer/prompts';
import fs from 'fs';

const answer = await input({ message: 'Enter your url' });
console.log(answer);
var qr_svg = qr.image(answer, { type: 'svg' });


fs.appendFile('url.txt', answer+'\n', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
