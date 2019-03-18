const AuthenticationController = require('./controllers/AutherticationController');

const AuthenticationContollerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = (app) => {
    app.post('/register',
        AuthenticationContollerPolicy.register,
        AuthenticationController.register);
};