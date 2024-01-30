import { use, assert } from 'chai'
import chaiHttp from 'chai-http'
import request from 'supertest'
import { describe, it } from 'mocha'

import { app, stop } from '../src/index.js'
import { readJSON } from '../src/utils/read-json.js'
const contacts = await readJSON('./database/contacts.json')
use(chaiHttp)


// describe('read endpoints suite', () => {
//     it('Should return the current contacts', (done) => {
//         request(app)
//             .get('/v1/contacts')
//             .end((err, res) => {
//                 if (err) {
//                     console.error(err)
//                     done(err)
//                 }
//                 console.log('res.body: ', res.body)
//                 console.log('from json', contacts)
//                 assert.equal(res.status, 200)
//                 assert.deepEqual(res.body, contacts)
//                 done()
//             })
//     })

//     it('Should return the contact with name jose', (done) => {
//         request(app)
//             .get('/v1/contacts/jose')
//             .end((err, res) => {
//                 if (err) {
//                     console.error(err)
//                     done(err)
//                 }

//                 assert.equal(res.status, 200)
//                 assert.deepEqual(res.body, contacts.find(contact => contact.name === 'jose'))
//                 done()
//             })
//     })


//     it('Should return 404', (done) => {
//         request(app)
//             .get('/test')
//             .end((err, res) => {
//                 if (err) {
//                     console.error(err)
//                     done(err)
//                 }

//                 assert(res.status, 404)
//                 assert(res.text, '404 Not Found😡')
//                 done()
//             })
//     })
// })

// describe('Write endpoints suite', () => {
//     it('Should create a contact with name Pepito and delete it after', (done) => {
//         const contactData = {
//             name: 'Pepito Grillo',
//             birthday: '1986-05-12',
//             phone: 1234567890,
//             email: 'fdsa@gmail.com'
//         }

//         request(app)
//             .post('/v1/contacts')
//             .send(contactData)
//             .set('Content-Type', 'application/json')
//             .expect(201)
//             .end((err, res) => {
//                 if (err) {
//                     console.error(err)
//                     return done(err)
//                 }
//                 // Verificar que la respuesta contiene un campo 'id'
//                 const createdContact = res.body
//                 const contactId = createdContact.id
//                 assert.ok(contactId)

//                 // Verificar que los campos del objeto creado son iguales a los proporcionados
//                 assert.strictEqual(createdContact.name, contactData.name)
//                 assert.strictEqual(createdContact.birthday, contactData.birthday)
//                 assert.strictEqual(createdContact.phone, contactData.phone)
//                 assert.strictEqual(createdContact.email, contactData.email)
                

//                 // Ahora, puedes realizar otras pruebas si es necesario

//                 // Después de realizar otras pruebas, puedes realizar la solicitud DELETE
//                 request(app)
//                     .delete(`/v1/contacts/${contactId}`)
//                     .expect(200)
//                     .end((err, res) => {
//                         if (err) {
//                             console.error(err)
//                             return done(err)
//                         }
//                         const deletedContact = res.body

//                         assert.deepEqual(createdContact, deletedContact)
//                         request(app)
//                             .get('/v1/contacts')
//                             .end((err, res) => {
//                                 if (err) {
//                                     console.error(err)
//                                     return done(err)
//                                 }
//                                 assert.deepEqual(res.body, contacts)
//                                 done()
//                             })
//                     })
//             })
//     })
//     stop()
// })

