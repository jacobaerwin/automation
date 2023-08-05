var request = require('superagent');
var should = require('should');

var agent = request.agent();
var host = 'https://pokeapi.co/'

describe('GET /', function() {
  it('should render the index page', function(done) {
    agent
      .get(host + '/')
      .end(function(err, res) {
        should.not.exist(err);
        res.status.should.be.equal(200);
        done();
      })
  })
})