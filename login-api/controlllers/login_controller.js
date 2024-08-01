const logins = require('../data/LOGIN_STORE');

function loginUser(username, password) {
    const usernameMatch = logins.filter(login => login.username === username);
    const passwordMatch = logins.filter(login => login.password === password);

    if (usernameMatch && passwordMatch) {
        
    }
};

module.exports = { loginUser };
