var program = require("commander");

var version = require("./package.json").version;

program.version(version);

program.command('init [path]')
.description('create a new application')
.action(function(appName){
    console.log("create appName %s",appName);
    init(process.cwd()+"/"+appName);
});

function init(path){
    console.log("create application in path %s ",path);
    if(!emptyDirectory(path)){
        console.log("Directory is empty ");
    } else {
        console.error("Directory is not empty!!!");
    }
}

/**
 * check directory is empty
 * @param {*} path 
 * @return Boolean
 */
function emptyDirectory(path){
    var fs = require("fs");
    return fs.existsSync(path);
}

program.on("--help",function(){
    
});

// 解析参数
program.parse(process.argv);

// node index.js -h | node index.js --help