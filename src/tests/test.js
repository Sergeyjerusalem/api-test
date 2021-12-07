const api = require('../app/api')
const chai = require('chai');

describe('Api', function () {

    it('t', async function () {
        const resp = await api.assets.getSummary('/assets/style/index.css');
        api.expect(resp.status).to.equal(200);
       
    
    });

    it('t2', async function () {
        const resp = await api.assets.getSummary('/assets/logo.svg')
        api.expect(resp.status).to.equal(200); 

    });
});