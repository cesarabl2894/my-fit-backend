const ExerciseCtrl = require('../controllers/exercise');
const Joi = require('joi');

module.exports = [
    {
        method: 'GET',
        path: '/exercises/all/',
        handler: ExerciseCtrl.getExercises,
        options: {            
            tags: ['api']
        },
    },
    {
        method: 'GET',
        path: '/exercises/category/{categoryId}',
        handler: ExerciseCtrl.getExercisesByCategory,
        options: {
            tags: ['api'],
            validate: {
                params: {
                    categoryId: Joi.number().required(),
                }
            }
        }

    },
    {
        method: 'GET',
        path: '/exercises/sss/',
        handler: ExerciseCtrl.getExercises,
        options: {            
            tags: ['api']
        },
    },
    
];