import chai from 'chai';
import chaiHttp from 'chai-http';
import to from 'await-to-js';
import startService from '../src/service';
import seedData from '../src/models/seeds/rectifications.js';
console.log(seedData);


const should = chai.should();
chai.use(chaiHttp);

describe('api', () => {
  describe('GET /rectifications', () => {
    it('responds with seeded data', async() => {
        const service = await startService(); 
        
        const [error, response] = await to(chai.request(service).get('/rectifications'));
        response.should.have.status(200);
        response.body.should.be.a('array');
        response.body.should.be.eql(seedData);
      });
  });
});
