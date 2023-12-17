const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

const contacts = [
    {
        id: 1,
        name: 'jose',
        birthday: '2004-11-04',
        phone: 643271289,
        email: 'jose@joseando.com'
    },
    {
        id: 2,
        name: 'maria',
        birthday: '1990-01-01',
        phone: 618571534,
        email: 'maria@gmail.com'
    }
]

app.get('/', (req, res) => {
    console.log(`Request received! ${req.url}`)
    res.status(200)
    res.set('Content-Type', 'text/html; charset=utf-8')
    res.send(
        '<h1>Hola mundo</h1>' +
        '<h2>hola holita</h2>' +
        '<p>Buenas tardes😀</p>'
    )
})

// READ
app.get('/contacts', (req, res) => {
    console.log(`GET ${req.path}`)
    res.status(200)
        .set(`Request to ${req.path}`)
        .setHeader('Content-Type', 'application/json; charset=utf-8')
        .json(contacts)
})

const checkValidContact = newContact => {
    return !newContact.name || !newContact.birthday || !newContact.phone || !newContact.email
}

// CREATE
app.post('/contacts', (req, res) => {
    const newContact = req.body
    console.log(`POST ${req.path} with data ${JSON.stringify(newContact)}`)

    if (checkValidContact(newContact)) {
        res.status(400)
            .setHeader('Content-Type', 'text/plain; charset=utf-8')
            .send('Incorrect contact data😡')
        return
    }

    newContact.id = contacts.length + 1
    contacts.push(newContact)
    res.status(200)
        .setHeader('Content-Type', 'application/json; charset=utf-8')
        .json(newContact)
})


// UPDATE
app.put('/contacts/:name', (req, res) => {

})

// DELETE
app.delete('/contacts/:name', (req, res) => {

})


app.use((req, res) => {
    res.status(404)
        .setHeader('Content-Type', 'text/html; charset=utf-8')
        .send('404 Not Found😡')
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})

exports.app = app
exports.contacts = contacts
