/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';


const questions = [
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name",
      default() {
        return 'Doe';
      },
    },
    {
      type: 'input',
      name: 'fav_color',
      message: "What's your favorite color",
      transformer(color, answers, flags) {
        if (flags.isFinal) {
          return color + '!';
        }
  
        return color;
      },
    },
    {
      type: 'input',
      name: 'phone',
      message: "What's your phone number",
      validate(value) {
        const pass = value.match(
          /^([01])?[\s.-]?\(?(\d{3})\)?[\s.-]?(\d{3})[\s.-]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?)(?:\d+)?)?$/i,
        );
        if (pass) {
          return true;
        }
  
        return 'Please enter a valid phone number';
      },
    },
  ];
  
inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
