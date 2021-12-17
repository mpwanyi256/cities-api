const server = require('../app'),
      chai = require('chai'),
      chaiHttp = require('chai-http')

// Assertion 
chai.should()
chai.use(chaiHttp)

describe('Task APIs', () => {

    describe('Cities APIs', () => {

        it("It should return all cities", (done) => {
            chai.request(server)
                .get("/cities/")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.cities.length.should.not.be.eq(0);
                    done()
                })
        })

        it("It should GET a city by ID", (done) => {
            const cityId = 1

            chai.request(server)                
                .get(`/cities/${cityId}`)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                    response.body.should.have.property('city');
                    response.body.city.should.have.property('id').eq(cityId);
                done()
                })
        })
    })

})
