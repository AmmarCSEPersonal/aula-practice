import chai from 'chai';
const expect = chai.expect;
 
import Rectification from '../rectification';
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

