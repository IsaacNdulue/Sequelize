import {Sequelize} from "sequelize";

const sequelize = new Sequelize({
    username:"root",
    password:"root",
    database:"fist_class",
    host:"127.0.0.1",
    port:3306,
    dialect:"mysql",
})

export default sequelize;
