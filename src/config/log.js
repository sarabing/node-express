const log4js = require('log4js');


let rootDir = process.cwd();

log4js.configure({
    appenders: {

        // ruleConsole: {type: 'console'},

        ruleFile: {

            type: 'dateFile',

            filename: '../logs/server-',

            pattern: 'yyyy-MM-dd.log',

            alwaysIncludePattern: true

        }

    },
    categories: {

        default: {appenders: ['ruleFile'], level: 'info'}

    }
});

const logger = (name) =>{
    return log4js.getLogger(name || 'default');
}

module.exports = logger;
