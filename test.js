var supertest = require("supertest");
var should = require("should");
var app = require("./app.js");

describe('GET /', function() {
   // Test 1 - HTTP status
   it("Expect HTTP status 200", function(done) {
       supertest(app)
           .get("/")
           .expect("Content-type", /text/)
           .expect(200, done());
   });
   // Test 2 - Control Test
   it("Mocha Control Test", function (done) {
       (1).should.be.exactly(1).and.be.a.Number();
       done();
   })
})