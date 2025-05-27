const AuthService = require("../Services/AuthService");

class AuthController {
    static async SignUp(req, res) {
        try {
            const result = await AuthService.SignUp(req.body);
            return res.status(201).json(result);
        } catch (err) {
            return res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
        }
    }

    static async Login(req, res) {
        try {
            const result = await AuthService.Login(req.body);
            return res.status(200).json(result);
        } catch (err) {
            return res.status(err.status || 500).json({ message: err.message || "Internal Server Error" });
        }
    }
}

module.exports = AuthController;
