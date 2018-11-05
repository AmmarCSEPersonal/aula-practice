import chai from 'chai';
import to from 'await-to-js';
import Rectification from '../rectification';

const expect = chai.expect;
describe('rectification', () => {
    it('should be invalid if coreLabel or valueTarget is empty', async() => {
        const rectification = new Rectification();

        const [result] = await to(rectification.validate());
        expect(result.errors.coreLabel).to.exist;
        expect(result.errors.valueTarget).to.exist;
    });
});

