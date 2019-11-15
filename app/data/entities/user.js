const typeorm = require('typeorm');
const EntitySchema = typeorm.EntitySchema;
const exercisesSchema = new EntitySchema({
    name: 'users',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        email:{
            type: 'varchar',
            length: 120,
            nullable: false
        },
        password: {
            type: 'varchar',
            nullable: false
        },
        first_name:{ 
            type: 'varchar',
            length: 50,
            nullable: false
        },
        last_name:{ 
            type: 'varchar',
            length: 50,
            nullable: false
        },
        heigth: {
            type: 'double',
            nullable: false
        },
        weight: {
            type: 'double',
            nullable: 'false'
        }
    },
    relations: {
        roles: {
            target: 'roles',
            type: 'one-to-many',
            inverseSide: "user",
            cascade: true
        }
    }
});

module.exports = exercisesSchema;