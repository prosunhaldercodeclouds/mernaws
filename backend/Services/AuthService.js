const User = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthService {
    static async SignUp(data) {
        const { firstname, lastname, email, password, phone } = data;
        if (!firstname || !lastname || !email || !password || !phone) {
            throw { status: 400, message: "All fields are required" };
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            lastname,
            email,
            password: encryptedPassword,
            phone,
        });

        const userData = user.toObject();
        delete userData.password;

        return { message: "User created successfully", user:userData };
    }

    static async Login(data) {
        const { email, password } = data;
        if (!email || !password) {
            throw { status: 400, message: "All fields are required" };
        }

        const user = await User.findOne({ email });
        if (!user) {
            throw { status: 404, message: "User not found" };
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw { status: 401, message: "Invalid password" };
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        const userData = user.toObject();
        delete userData.password;

        return {
            message: "User logged in successfully",
            user: userData,
            token,
        };
    }
}

module.exports = AuthService;
