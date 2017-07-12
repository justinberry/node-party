var sinon = require('sinon');
var expect = require('chai').expect;

var superagent = require('superagent');

var Dabber = require('../dist/dabber');
describe('Dabber', function() {
  describe('#dab()', function() {
    it('replaces img content with dab', function() {
      expect(Dabber.dab('<img src="/some/image/url.png" width="5" height="5">'))
        .to.equal(`<img src="${Dabber.DAB_GIF}" width="5" height="5">`);
    });
  });
});
