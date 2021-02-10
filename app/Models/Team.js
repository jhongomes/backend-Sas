'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Team extends Model {

    users() {
      return this.belongsTomMany("App/Models/User").pivotModel(
        "App/Models/UserTeam" );
    }
}

module.exports = Team
