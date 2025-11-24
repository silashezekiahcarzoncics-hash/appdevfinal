const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post("/register", (req, res) => {
    const { username, password, fullname, email } = req.body;

    if (!username || !password) {
        return res.status(400).json({
            success: false,
            message: "Username and password are required."
        });
    }

    const checkUserSql = "SELECT * FROM users WHERE username = ? OR email = ?";
    db.query(checkUserSql, [username, email], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: "Server error." });

        if (result.length > 0) {
            return res.status(409).json({
                success: false,
                message: "Username or email already exists."
            });
        }

        const insertSql = "INSERT INTO users (username, password, fullname, email) VALUES (?, ?, ?, ?)";
        db.query(insertSql, [username, password, fullname, email], (err) => {
            if (err) return res.status(500).json({ success: false, message: "Registration failed." });

            res.json({
                success: true,
                message: "Registration successful!"
            });
        });
    });
});

app.listen(4000, () => {
    console.log("Backend running on http://localhost:4000");
});
