import userModel from "../models/usersModel";
import * as utils from "../utils";

export default class userController {
    /**
     * @method signUp
     * @description creates a new user
     * @param {*} req
     * @param {*} res
     * @returns {object} user
     */
    static async signUp(req, res) {
        try {
            const { name, email, password } = req.body;
            const user = await userModel.getOne(null, email);
            if (user[0]) {
                return res.status(409).send({
                    status: 409,
                    message: 'user already exists',
                });
            }
            
            const hashed = utils.encryptPassword(password);
            
            const newUser = await userModel.create(name, email, hashed);
            const { id } = newUser;
            const token = utils.generateToken(id)

            delete newUser.password;
            return res.status(200).send({
                status: 'success',
                message: "user created successfully",
                user: newUser,
                token
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'could not create user',
                error,
            });
        }
    }

    /**
     * @method signIn
     * @description logs in user and returns token
     * @param {*} req
     * @param {*} res
     * @returns {object} user
     */
    static async signIn(req, res) {
        try {
            const { email, password } = req.body;
            const user = await userModel.getOne(null, email);
            if (!user) {
                return res.status(404).send({
                    status: 'error',
                    message: 'user not found',
                });
            }

            const match = await utils.compare(password, user.password);
            if (!match) {
                return res.status(400).send({
                    status: 'error',
                    message: 'incorrect crdentials'
                });
            }

            const token = utils.generateToken(user.id);

            delete user.password;
            return res.status(200).send({
                status: 'success',
                message: 'login successful',
                user,
                token
            });
        } catch (error) {
            return res.status(500).send({
                status: 'error',
                message: 'signin unsuccessful',
                error,
            });
        }
    }
}