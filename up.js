//docker-compose up

require("./scripts/setEnv");
var docker = require("./scripts/docker-compose");
var path = require("path");

docker.up(path.resolve("./"));

