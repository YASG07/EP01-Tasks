const jwt = require("jsonwebtoken");

function generateToken(user){
    const payload = { userid: user.id, username: user.name}
    const secretKey = "Key";
    const options = { expiresIn: "1h"};
    return jwt.sign(payload, secretKey, options);
}

function verifyToken(token){
    const secretKey = "Key";
    try{
        const decode = jwt.verify(token, secretKey);
        return decode;
    } catch (error) {
        return null;
    }
}

module.exports = {
    generateToken,
    verifyToken
}