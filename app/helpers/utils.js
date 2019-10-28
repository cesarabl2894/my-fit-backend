const fs = require('fs');
const glob = require('glob');

const isArray = Array.isArray;

function getFiles(path, realpath) {
    return glob.sync(path, {
        cwd: require('path').join(__dirname, '..'),
        nodir: true,
        realpath: realpath
    });
};

var getRoutes = () => {
    let routesPath = getFiles('routes/**/*.js', true);
    let routes = [];

    if(isArray(routesPath)){

        for (let route of routesPath) {
            routes.push(require(route));
        }
    }

    console.log(routes);

    return routes;
};

const promise = (fn) =>{
    return new Promise(async function(resolve,reject){
        await fn(resolve,reject).catch(function(ex){
            reject(ex);
        });
    });
}
const validateToken = async function (decoded, request, h) {
	return {isValid: true};
};

module.exports = {
    getFiles,
    getRoutes,
    promise,
    validateToken
};