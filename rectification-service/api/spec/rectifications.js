import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../';

const should = chai.should();
chai.use(chaiHttp);

describe('api', () => {
  describe('GET /rectifications', () => {
    it('responds with OK', done => {
      chai.request(server)
        .get('/rectifications')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
      });
  });
});
