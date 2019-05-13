const path = require("path");
require('dotenv').config();
const args = require('yargs').argv;
const fs = require('fs')

//SET .env
const mydata = path.resolve("./");
process.env.PORT = args.port || "1433";
process.env.PASSWORD = args.password || "deVops.Docker!";

fs.writeFileSync('./.env');
fs.writeFileSync('./docker-compose.yml',
 "version: '3.0'"
+"\nservices:"
+"\n  mssql:"
+"\n    build:"
+"\n        context: mssql"
+"\n    ports:"
+"\n      - ${PORT}:1433"
+"\n    environment:"
+"\n      ACCEPT_EULA: 'Y'"
+"\n      SA_PASSWORD: ${PASSWORD}");



//mkdir if nor exists
if(!args.nosave)
{
    process.env.HOME = path.join(args.home || mydata, args.folder || "mydata");
    if (!fs.existsSync(process.env.HOME)){
        fs.mkdirSync(process.env.HOME);
    }

    console.log("data will storaged in " + process.env.HOME);


    fs.appendFileSync('./.env', "HOME="+process.env.HOME);
    fs.appendFileSync('./docker-compose.yml',
 "\n    volumes:"
+"\n    - ${HOME}:/var/opt/mssql/data");
}

//Save .env
fs.appendFileSync('./.env', '\n');
fs.appendFileSync('./.env', "PORT="+process.env.PORT);
fs.appendFileSync('./.env', '\n');
fs.appendFileSync('./.env', "PASSWORD="+process.env.PASSWORD);


console.log("SQL will listen at port " + process.env.PORT);