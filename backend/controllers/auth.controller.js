import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";


export const login = async (req, res) => {
    try {

        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid username or password" });
        }
        generateTokenAndSetCookie(res, user._id);
        res.status(200).json({ _id: user._id, username: user.username, email: user.email, profilePicture: user.profilePicture });

    } catch (error) {

        console.log("Error in login : ", error.message);
        res.status(500).json({ error: "Internal server error" });
    
    }

};

export const signup = async (req, res) => {
    try {
        const { fullName, username, email, password, confirmPassword, gender } = req.body;
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }
        const user = await User.findOne({ $or: [{ username }, { email }] });
        if (user) {
            if (user.username === username) {
                // Username is already in use
                return res.status(400).json({ error: "Username is already in use" });
            }
            if (user.email === email) {
                // Email is already in use
                return res.status(400).json({ error: "Email is already in use" });
            }
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullName: fullName,
            username: username,
            email: email,
            password: hashedPassword,
            gender: gender,
            profilePicture: gender === "male" ? boyProfilePic : girlProfilePic
        });


        if (newUser) {
            await newUser.save();
            generateTokenAndSetCookie(res, newUser._id);
            res.status(201).json({ _id: newUser._id, username: newUser.username, email: newUser.email, profilePicture: newUser.profilePicture});
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        res.status(200).json({ message: "Logged out successfully" });
    } catch (error) {
        console.log("Error in logout: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};