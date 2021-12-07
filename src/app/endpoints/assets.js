const BaseApi = require('../baseApi');

class Assets extends BaseApi {
    async getSummary(url) {
        return this.get(url);
    }
}

module.exports = Assets;