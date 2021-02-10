'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class UserTeam extends Model {
  use(){
    return this.belongsTo("App/Models/User");
  }
}

module.exports = UserTeam
