var form  = $('form');

function User(username, password) {
	this.username = username;
	this.password = password;
}

var aaron = new User('aaron@theironyard.com', 'password123');

var admin = new User('admin@google.com', 'pandas');

// function validate() {

// }


form.on('submit', function(e) {
	e.preventDefault();

	var username = $('#username');
	var password = $('#password');
	var usernameError = $('#username_error')
	var passwordError = $('#password_error')

	if(username.val().includes('@') === false) {
		usernameError.html('Please enter an email address before logging in.')
		return;
	}

	if(password.val() === '') {
		passwordError.html('Please enter a password before logging in')
		return;
	}
		
	if(username.val() === aaron.username && password.val() === aaron.password) {
		window.location = 'https://www.theironyard.com';
		return;
	}
	
	if(username.val() === admin.username && password.val() === admin.password) {
		window.location = 'https://www.theironyard.com';
		return;
	}

	usernameError.html('Your username was not found')

});