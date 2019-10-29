const usersCtrl = require('../controllers/users');
const Joi = require('joi');

module.exports = [
    {
        method: 'POST',
        path: '/signin/',
        handler: usersCtrl.addUser,
        options: {
            tags: ['api'],
            validate: {         
                payload : {

                    email: Joi.string().required().min(2).max(30),
                    first_name: Joi.string().required().min(2).max(20),
                    last_name:Joi.string().required().min(2).max(20),
                    password: Joi.string().required().min(7).max(50),
                    height: Joi.number(),
                    weight: Joi.number(),
                    role: Joi.string().required().min(2).max(30),

                }       
            }
        }
    }
];