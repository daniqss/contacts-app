const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe, it } = require('mocha')
// const { it } = require('mocha')

const app = require('../src/index').app
const contacts = require('../src/index').contacts
chai.use(chaiHttp)


describe('e2e suite', () => {
    it('Should return the current contacts', (done) => {
        chai.request(app)
            .get('/contacts')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }

                chai.assert.equal(res.status, 200)
                chai.assert.deepEqual(res.body, contacts)
                done()
            })
    })

    it('Should return 404', (done) => {
        chai.request(app)
            .get('/nashe')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }

                chai.assert(res.status, 404)
                chai.assert(res.text, '404 Not Found😡')
                done()
            })
    })

    it('Should add a new contact', (done) => {
        const newContact = {
            id: 3,
            name: 'pepe',
            birthday: '2010-04-30',
            phone: 618571534,
            email: 'peep@gmail.com'
        }
        chai.request(app)
            .post('/contacts')
            .send(newContact)
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }

                chai.assert.equal(res.status, 200)
                chai.assert.deepEqual(res.body, newContact)
                done()
            })
    })

    it('Should return status = 400', (done) => {
        const newContact = {
            id: 3,
            birthday: '2010-04-30',
            phone: 618571534,
            email: 'peep@gmail.com'
        }
        chai.request(app)
            .post('/contacts')
            .send(newContact)
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }

                chai.assert.equal(res.status, 400)
                done()
            })
    })
})
