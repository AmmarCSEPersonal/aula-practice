import chai from 'chai';
import Rectification from '../rectification';

const expect = chai.expect;
describe('rectification', () => {
    it('should be invalid if coreLabel or valueTarget is empty', done => {
        const rectification = new Rectification();
 
        rectification.validate(function(result) {
            expect(result.errors.coreLabel).to.exist;
            expect(result.errors.valueTarget).to.exist;
            done();
        });
    });
});

