const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Users API', () => {
  it('should get all users', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should add a new user', (done) => {
    const newUser = { name: 'TestUser', email: 'test@example.com' }; // Change from username to name
    chai.request(app)
      .post('/users')
      .send(newUser)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name', newUser.name); // Change from username to name
        done();
      });
  });

  

  // Add other tests for different CRUD operations
});
