const { validateContact, validatePartialContact } = require('../schemas/contacts')

const router = (app, contacts) => {

    // CREATE
    app.post('/contacts', (req, res) => {
        const newContact = validateContact(req.body)

        if (!newContact.success) {
            console.error(newContact.error.message)
            return res.status(400).json({ "error": JSON.parse(newContact.error.message) })
        }

        console.log(`POST ${req.path} with data ${JSON.stringify(newContact)}`)
        contacts.push(newContact.data)
        res.status(200)
            .json(newContact.data)
    })


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
        
        if (contact === undefined) {
            return res.status(404).send('Contact not found')
        }
        
        res.status(200).json(contact)
    })


    // UPDATE
    app.patch('/contacts/:name', (req, res) => {
        const updatedContact = validatePartialContact(req.body)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
          }
        
        const name = req.params.name
        const contactIndex = contacts.find(contact => contact.name === name)

        if (contactIndex === undefined) {
            return res.status(404).send('Contact not found')
        }

        const updateContact = {
            ...contacts[contactIndex],
            ...updatedContact
        }
        contacts[contactIndex] = updateContact
        res.json(updateContact)

        // FIX THIS
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

module.exports = {
    router
}