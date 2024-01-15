import { use, assert } from 'chai'
import chaiHttp from 'chai-http'
import request from 'supertest'
import { describe, it } from 'mocha'
// const { it } = require('mocha')

import { app } from '../src/index.js'
import { readJSON } from '../src/utils/read-json.js'
const contacts = await readJSON('./contacts.json')
use(chaiHttp)


describe('e2e suite', () => {
    it('Should return the current contacts', (done) => {
        request(app)
            .get('/api/v1/')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }
                console.log('res.body: ', res.body)
                console.log('from json', contacts)
                assert.equal(res.status, 200)
                assert.deepEqual(res.body, contacts)
                done()
            })
    })

    it('Should return 404', (done) => {
        request(app)
            .get('/test')
            .end((err, res) => {
                if (err) {
                    console.error(err)
                    done(err)
                }

                assert(res.status, 404)
                assert(res.text, '404 Not Found😡')
                done()
            })
    })

    // it('Should return the contact with name jose after delete it', (done) => {
    //     const name = 'jose'
    //     request(app)
    //         .get(`/api/v1/${name}`)
    //         .end((err, res) => {
    //             if (err) {
    //                 console.error(err)
    //                 done(err)
    //             }

    //             assert.equal(res.status, 200)
    //             assert.deepEqual(res.body, contacts.find(contact => contact.name === name))
    //             const wantedContact = res.body
                
    //             request(app)
    //                 .delete(`/api/v1/${name}`)
    //                 .end((err, res) => {
    //                     if (err) {
    //                         console.error(err)
    //                         done(err)
    //                     }

    //                     assert.equal(res.status, 200)
    //                     assert.deepEqual(res.body, wantedContact)
    //                     done()
    //                 })
    //         })
    // })
})
