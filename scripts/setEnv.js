const path = require("path");
require('dotenv').config();
const args = require('yargs').argv;
const fs = require('fs')

//SET .env
const mydata = path.resolve("./");
process.env.HOME = (args.home || mydata) + (args.folder || "/mydata")
process.env.PORT = args.port || "1432";
process.env.PASSWORD = args.password || "deVops.Docker!";

//mkdir if nor exists
if (!fs.existsSync(process.env.HOME)){
    fs.mkdirSync(process.env.HOME);
}

//Save .env
fs.writeFileSync('./.env', "HOME="+process.env.HOME);
fs.appendFileSync('./.env', '\n');
fs.appendFileSync('./.env', "PORT="+process.env.PORT);
fs.appendFileSync('./.env', '\n');
fs.appendFileSync('./.env', "PASSWORD="+process.env.PASSWORD);


console.log("data will storaged in " + process.env.HOME);
console.log("SQL will listen at port " + process.env.PORT);