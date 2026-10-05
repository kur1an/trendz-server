require("dotenv").config();
const app = require("./app");

const databaseConnection = require("./config/databaseConnection");
databaseConnection();


app.listen(process.env.PORT, ()=>{

console.log(`server is running ${process.env.PORT}`);


});
