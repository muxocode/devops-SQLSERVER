var compose = require("docker-compose");


module.exports.up =function(path, file){
        compose.upAll({ cwd: path, log: true, config:file })
          .then(
            () => { console.log('done')},
            err => { console.log('something went wrong:', err.message)}
          );
        
        };

module.exports.down = function(path){
        compose.down({ cwd: path, log: true })
        .then(
          () => { console.log('done')},
          err => { console.log('something went wrong:', err.message)}
        );
    }
