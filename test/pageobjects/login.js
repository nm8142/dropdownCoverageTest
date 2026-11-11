import Parent from './parent.js';

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
    async login (username, password) {
        await this.usernameField.setValue(username, { mask: true});
        await this.passwordField.setValue(password, { mask: true });
        await this.loginButton.click();
    }
}

export default new Login();