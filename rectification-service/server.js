import restify from 'restify';
import mongoose from 'mongoose';
import to from 'await-to-js';
import config from './config';
import api from './api/rectifications';

async function launchSequence(server) {
    let error, success;
    const sequence = [connectMongo, ()=>listen(server)];
    for(let step of sequence){
        [error, success] = await to(step());
        if(error){
            console.error(error);
            return;
        }
    }

    console.log('%s listening at %s', server.name, server.url);
}
async function connectMongo() {
    const options = { server: { socketOptions: { keepAlive: 1 } } };
    return await mongoose.connect(config.dbUri, options);
}
async function listen(){
    api(server, {});
    return await server.listen(8080);
}

const server = restify.createServer({
    name: config.appName,
    version: config.appVersion
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

(async function(){
    await launchSequence(server);
})()

export default server;
