const typeorm = require('typeorm');
const EntitySchema = typeorm.EntitySchema;

const Roles = new EntitySchema({
    name: 'roles',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true
        },
        name: {
            type: 'varchar',
            length: 50,
            nullable: false
        }
    },
    relations: {
        users: {
            target: 'users',
            type: 'many-to-one',
            inverseSide: 'roles',
        }
    }
});

module.exports = Roles;