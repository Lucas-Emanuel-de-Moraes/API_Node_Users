import { Sequelize } from "sequelize"
import { createUserModel } from "../model/userSchema.js";

const sequelize = new Sequelize('postgres', 'postgres', '7247', {
  host: 'localhost',
  dialect: 'postgres'
})

let UserModel = null;

const conect = async () => {
  try {
    await sequelize.authenticate()
    UserModel = await createUserModel(sequelize)
    await sequelize.sync()
    console.log('Database Synced')
  } catch(error) {
    console.log(error)
  }
}

export {
  conect,
  UserModel
}
