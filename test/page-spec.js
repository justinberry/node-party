var sinon = require('sinon');
var expect = require('chai').expect;

var superagent = require('superagent');

var PageGetter = require('../dist/page-getter');
var Server = require('../dist/server');
describe('PageGetter', function() {

  before(function() {
    sinon.stub(superagent, 'get').returns(new Promise((resolve, reject) => {
      resolve({ text: '<img src="/some/image/url.png" width="5" height="5">' });
    }));
  });

  describe('#get()', function() {
    it('should return content of page', function(done) {
      var promise = PageGetter.getPage()
        .then(function(result) {
        expect(result).to.equal('<img src="/some/image/url.png" width="5" height="5">');
        done();
      })
      .catch(done);
    });
  });

  after(function() {
    superagent.get.restore();
  });
});
