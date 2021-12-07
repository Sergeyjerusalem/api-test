const BaseApi = require("./baseApi");
const chai = require('chai');
const Assets = require("./endpoints/assets");


class Api extends BaseApi {

    expect = chai.expect;

    assets = new Assets();

}

module.exports = new Api ();