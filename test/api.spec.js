require("chai").should();

var SerNode = require("../lib")
var serNode = new SerNode({
  id: process.env["SER_ID"] || "",
  secret_key: process.env["SECRET_KEY"] || "",
});
console.log(serNode)
before(function (done) {
    console.log("before ----")
    serNode.getToken().then(function (data) {
      console.log(data);
      return done();
    });
  });

describe("get some api run and test", function (done) {
  

  it("get ptt topic", function (done) {
    console.log("ptt ----")
    serNode.request("top_article/ptt", {
      period: 10
    })
    .then(function (data) {
      console.log("--- show result")
      console.log(data);
      (data.message.indexOf("success") > -1).should.be.true;
      return done();
    });
  });

});