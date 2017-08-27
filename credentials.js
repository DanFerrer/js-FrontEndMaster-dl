const inquirer = require('inquirer');

async function getWebsiteCredentials() {
	const questions = [
		{
			name: 'username',
			type: 'input',
			message: 'Enter your Front End Masters username:',
			validate: (value) => {
				return (value.length ? true : 'Please enter your username');
			}
		},
		{
			name: 'password',
			type: 'password',
			message: 'Enter your password:',
			validate: (value) => {
				return (value.length ? true : 'Please enter your username');
			}
		}
	];

	return await inquirer.prompt(questions);
}

exports.getWebsiteCredentials = getWebsiteCredentials;
