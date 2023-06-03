const request = require('supertest');
const expect = require('chai').expect;
const reqres = require('../config/reqres.config.json');

describe('PATCH API tests using SuperTest', () => {

    it('should successfully pass the test for patch request', (done) => {
        request(reqres.baseUrl)
            .patch('/api/users/2')
            .send({ name: 'Jacob', job: 'QA Lead' })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json')
            .end(function (err, res) {
                expect(res.statusCode).to.be.equal(200);
                expect(res.body.name).to.be.equal('Jacob');
                expect(res.body.job).to.be.equal('QA Lead');
                expect(res.body.updatedAt).not.to.be.null;
                done();
            });
    });
});