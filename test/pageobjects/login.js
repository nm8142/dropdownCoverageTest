class Login extends Parent {
    // GETTERS
    get usernameField () {
        return $('input[data-testid="login-username"]');
    }
    get passwordField () {
        return $('input[data-testid="login-password"]');
    }
    get loginButton () {
        return $('button[data-testid="login-submit"]');
    }
    // FUNCTIONS
    login = (username, password) => {
        this.usernameField.setValue(username);
        this.passwordField.setValue(password);
        this.loginButton.click();
    }
    // This is the home page
    open () {
        return super.open('');
    }

}

export default Login();