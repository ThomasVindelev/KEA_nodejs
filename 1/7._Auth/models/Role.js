const { Model } = require('objection');

const User = require('./User')

class Role extends Model {
    static tableName = 'roles';

    static relationMappings = {
        role: {
            relation: Model.HasManyRelation,
            modelClass: User,
            join: {
                from: 'roles.id',
                to: 'users.role_id'
            }
        }
    };
}

module.exports = Role;