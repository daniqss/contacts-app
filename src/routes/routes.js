const contacts = [
    {
        name: 'jose',
        birthday: '2004-11-04',
        phone: 643271289,
        email: 'jose@joseando.com'
    },
    {
        name: 'maria',
        birthday: '1990-01-01',
        phone: 618571534,
        email: 'maria@gmail.com'
    }
]

const router = (app) => {

    // READ
    app.get('/contacts', (req, res) => {
        console.log(`GET ${req.path}`)
        res.set(`Request to ${req.path}`)
            .json(contacts)
    })

    app.get('/contacts/:name', (req, res) => {
        const name = req.params.name
        console.log(`GET ${req.path}`)
        const contact = contacts.find(contact => contact.name === name)

        res.status(200).json(contact)
    })

    // CREATE
    app.post('/contacts', (req, res) => {
        const newContact = req.body
        console.log(`POST ${req.path} with data ${JSON.stringify(newContact)}`)


        contacts.push(newContact)
        res.status(200)
            .json(newContact)
    })


    // UPDATE
    app.put('/contacts/:name', (req, res) => {
    })

    // DELETE
    app.delete('/contacts/:name', (req, res) => {
        const name = req.params.name
        console.log(`DELETE ${req.path}`)

        const contact = contacts.find(contact => contact.name === name)

        if (contact === undefined) {
            return res.status(404).send('Contact not found')
        }
        
        contacts.splice(contacts.indexOf(contact), 1)
        res.status(200).json(contact)
    })
}

exports.routes = router
exports.contacts = contacts