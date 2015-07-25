require("chai").should();

var SerNode = require("../lib");
console.log(process.env)
var serNode = new SerNode({
  id: process.env["SER_ID"] || "",
  secret_key: process.env["SECRET_KEY"] || ""
});

describe("get url", function (done) {
  it("should have get success", function (done) {
    (serNode.config.endpoint.indexOf("http://api.ser.ideas.iii.org.tw:80/api/") > -1).should.be.true;
      
    return done();
  });
});