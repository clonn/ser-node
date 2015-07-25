require("chai").should();
var serNode = require("../lib")

describe("get url", function (done) {
  it("should have get success", function (done) {
    (serNode.config.endpoint.indexOf("http://api.ser.ideas.iii.org.tw:80/api/") > -1).should.be.true;
      
    return done();
  });
});