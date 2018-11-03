import restify from 'restify';
import api from './api/rectifications';

const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

api(server, {});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});

export default server;
