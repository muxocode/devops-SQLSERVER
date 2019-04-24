var docker = require("./scripts/docker-compose");
var path = require("path");

docker.down(path.resolve("./"));

