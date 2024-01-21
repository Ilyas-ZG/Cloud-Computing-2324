const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Car Routes', () => {
  it('should get all cars', (done) => {
    chai.request(app)
      .get('/cars')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should delete a car', (done) => {
    const newCar = { brand: 'TestBrand', model: 'TestModel' };
    chai.request(app)
      .post('/cars')
      .send(newCar)
      .end((err, res) => {
        const existingCarId = res.body.id; 

        chai.request(app)
          .delete(`/cars/${existingCarId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('id', existingCarId);
            done();
          });
      });
  });

  it('should add a new car', (done) => {
    const newCar = { brand: 'TestBrand', model: 'TestModel' };

    chai.request(app)
      .post('/cars')
      .send(newCar)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('brand', newCar.brand);
        expect(res.body).to.have.property('model', newCar.model);
        done();
      });
  });

 
});
