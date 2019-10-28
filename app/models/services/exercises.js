const exercisesDAO = require('../data/exercises');

class ExercisesServices {

    async getExercises() {
        try{
            const exercises  = await exercisesDAO.getExercises();
            return exercises;
        }catch(error){
            throw('Something went wrong with the request');
        }
    }
    async getExercisesByCategory(categoryId) {
        console.log(categoryId);
        try{
            const exercises  = await exercisesDAO.getExercisesByCategory(categoryId);
            return exercises;
        }catch(error){
            throw('Something went wrong with the request');
        }
    }
}
    
module.exports = new ExercisesServices();