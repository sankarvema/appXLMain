var appService = {};

appService.info = getInfo;

module.exports = appService;

var pjson 		= require('../package.json');
var git 			= require('git-rev-sync');

function getInfo(){

    var info = {
        name: pjson.name,
        title: pjson.siteTitle,
        author: pjson.author,
        description: pjson.description,
        version: pjson.version,
        gitHash: git.short()
    };

	return info;
}
