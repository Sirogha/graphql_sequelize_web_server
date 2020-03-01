global.__SERVER__STATUS__ = 'Starting';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
//
const HttpServer = require('./main.js').httpServer;
require('dotenv').config();

process.stdin.resume();
process.on('exit', exitHandler.bind(null, {cleanup: true}));
process.on('SIGINT', exitHandler.bind(null, {exit: true}));
process.on('uncaughtException', exitHandler.bind(null, {exit: true}));

async function exitHandler(options, err) {
    if (options.cleanup) console.log('clean');
    if (err) console.log(err.stack);
    if (options.exit) process.exit();
}