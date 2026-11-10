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
        this.usernameField.setValue(username, { mask: true});
        this.passwordField.setValue(password, { mask: true });
        this.loginButton.click();
    }
}

export default Login();