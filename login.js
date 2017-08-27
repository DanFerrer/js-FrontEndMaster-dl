const webdriver = require('selenium-webdriver');
const urls = require('./urls');

const {
	Builder,
	Key
} = webdriver;

const {
	loginUrl,
} = urls;

const driver = new Builder().forBrowser('chrome').build();

async function login(userId, password) { 
	return await driver.get(loginUrl).then(() => {
		const usernameField = driver.findElement({id: 'rcp_user_login'});
		const passwordField = driver.findElement({id: 'rcp_user_pass'});
		
		usernameField.sendKeys(userId);
		passwordField.sendKeys(password);
		passwordField.sendKeys(Key.RETURN);
	});
}

function findErrors() {
	driver.findElements({className: 'rcp_error empty_password'}).then((found) => {
		try {
			if (found.length) throw 'Invalid user id or password';
		} catch (err) {
			// console.log(err);
		}
	});
}


exports.login = login;
exports.findErrors = findErrors;
