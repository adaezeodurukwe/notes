import * as utils from '../utils';

const Auth = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) {
            return res.status(401).send({
                status: 'error',
                message: 'unauthorized',
            });
        }

        const token = authorization.split(' ')[1];
        const unsigned = await utils.verifyToken(token);

        req.userId = unsigned.userId;

        return next();
    } catch (error) {
        return res.status(401).send({
            status: 401,
            message: error.message,
        });
    }
};

export default Auth;
