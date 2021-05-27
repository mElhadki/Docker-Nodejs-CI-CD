var expect  = require("chai").expect;
var request = require("request");
let chai = require('chai')
let chaiHttp = require('chai-http');
let app = require('../index');
let User = require("../data.json");
let should = chai.should();


chai.use(chaiHttp);

describe('/GET USERS', () => {
    it('it should GET all the users', (done) => {
          chai.request(app)
          .get('/')
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(45);
            done();
          });
    });
});



describe('/GET/:id user', () => {

    it('it should GET a user by the given id', (done) => {
     
        chai.request(app)
          .get('/' + 1)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('createdAt');
                res.body.should.have.property('name');
                res.body.should.have.property('email');
                res.body.should.have.property('phone');
                res.body.should.have.property('id').eql('1');
            done();
          });
      

    });
});