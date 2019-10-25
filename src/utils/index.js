import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Encrypt password
const encryptPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

// Compare passwords
const compare = (plainPassword, hashedPassword) => bcrypt.compare(plainPassword, hashedPassword);

// Generate token
const generateToken = id => jwt.sign({ userId: id }, process.env.SECRET, { expiresIn: '7d' });

// Verify yoken
const verifyToken = token => jwt.verify(token, process.env.SECRET);

export {
    encryptPassword, generateToken, compare, verifyToken,
};