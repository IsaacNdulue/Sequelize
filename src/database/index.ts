import sequelize from "./init";

const initializeDB = async ()=>{
    try {
        await sequelize.authenticate();
        console.log('Database connected...');
        
    } catch (error: any) {
        console.log(error.message);        
    }
};

export default initializeDB;
