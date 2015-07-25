require("chai").should();
var serNode = require("../lib")

describe("get user token", function (done) {
  it("should have get success", function (done) {

    serNode.user.getToken(function (result) {
      result.status.should.be.ok;
      return done();
    });
    
  });
});