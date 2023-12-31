const chai = require('chai')
const chaiHttp = require('chai-http')
const { describe, it } = require('mocha')
// const { it } = require('mocha')

const { app, contacts } = require('../src/index')
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
                console.log(res.body)
                console.log(contacts)
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

    // it('Should add a new contact', (done) => {
    //     const newContact = {
    //         id: 3,
    //         name: 'pepe',
    //         birthday: '2010-04-30',
    //         phone: 618571534,
    //         email: 'peep@gmail.com'
    //     }
    //     chai.request(app)
    //         .post('/contacts')
    //         .send(newContact)
    //         .end((err, res) => {
    //             if (err) {
    //                 console.error(err)
    //                 done(err)
    //             }

    //             chai.assert.equal(res.status, 200)
    //             chai.assert.deepEqual(res.body, newContact)
    //             done()
    //         })
    // })

    // it('Should return 400', (done) => {
    //     const newContact = {
    //         name: 'pepe',
    //         birthday: '2010-04-30',
    //         phone: 618571534,
    //         email: 'peep@gmail.com'
    //     }
    //     chai.request(app)
    //         .post('/contacts')
    //         .send(newContact)
    //         .end((err, res) => {
    //             if (err) {
    //                 console.error(err)
    //                 done(err)
    //             }

    //             chai.assert.equal(res.status, 400)
    //             done()
    //         })
    // })

    it('Should return the contact with name jose after delete it', (done) => {
        const name = 'jose'
        chai.request(app)
            .get(`/contacts/${name}`)
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }

                chai.assert.equal(res.status, 200)
                chai.assert.deepEqual(res.body, contacts.find(contact => contact.name === name))
                const wantedContact = res.body
                
                chai.request(app)
                    .delete(`/contacts/${name}`)
                    .end((err, res) => {
                        if (err) {
                            console.error(err)
                            done(err)
                        }

                        chai.assert.equal(res.status, 200)
                        chai.assert.deepEqual(res.body, wantedContact)
                        done()
                    })
            })
    })
})
