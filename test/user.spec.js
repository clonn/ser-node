require("chai").should();

var SerNode = require("../lib")
var serNode = new SerNode({
  id: process.env["SER_ID"] || "",
  secret_key: process.env["SECRET_KEY"] || "",
});


describe("get user token", function (done) {
  it("get init promise", function (done) {
    console.log(serNode)
    serNode.connect().then(function (data) {
      console.log(data);
      (data.message.indexOf("success") > -1).should.be.true;
      data.result.should.be.an.Object;
      // data.result.token.length.should.above(1);
      return done();
    });
  });

  it("should have get success", function (done) {

    serNode.user.getToken(function (result) {
      result.status.should.be.ok;
      return done();
    });

  });
});