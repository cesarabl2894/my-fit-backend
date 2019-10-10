const fs = require('fs');
const glob = require('glob');

// function getRoutes() {
//     fs.read
// }

const isArray = Array.isArray;

function getFiles(path, realpath) {
    console.log(path, realpath);
    return glob.sync(path, {
        cwd: require('path').join(__dirname, '..'),
        nodir: true,
        realpath: realpath
    });
};

var getRoutes = () => {
    let routesPath = getFiles('app/routes/**/*.js', true);
    let routes = [];

    // const dirFiles = () => fs.readdir('./routes/', (err,files) => {
    //     console.log(files)
        
    // });

    // dirFiles();


    // console.log(routesPath);
    if(isArray(routesPath)){

        for (let route of routesPath) {
            routes.push(require(route));
        }
    }

    console.log(routes);

    return routes;
};

module.exports = {
    getFiles,
    getRoutes
};