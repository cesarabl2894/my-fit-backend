const db = require('../../helpers/db');
class ExercisesDAO {
    async getExercises() {
        const exercises = await db.execute('SELECT * FROM exercises',[],'my-fit');
        return exercises;
    }
    async getExercisesByCategory(category_id) {
        console.log(category_id);
        const exercises = await db.execute('SELECT * FROM exercises WHERE category_id = ? ',[category_id],'my-fit');
        return exercises;
    }
    
}


module.exports = new ExercisesDAO();