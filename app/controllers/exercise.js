const ExercisesService = require('../services/exercises');

class ExerciseCtrl {
    async getExercises() {
        const exercises = await ExercisesService.getExercises();
        return exercises;
    }
    async getExercisesByCategory(request){
        const categoryId = request.params.categoryId
        const exercises = await ExercisesService.getExercisesByCategory(categoryId);
        return exercises;
    }
}

module.exports = new ExerciseCtrl();