const { validateContact, validatePartialContact } = require('../schemas/contacts')

const router = (app, contacts) => {

    // CREATE
    app.post('/api/v1/', (req, res) => {
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
    app.get('/api/v1/', (req, res) => {
        console.log(`GET ${req.path}`)
        res.set(`Request to ${req.path}`)
            .json(contacts)
    })

    app.get('/api/v1/:name', (req, res) => {
        const name = req.params.name
        console.log(`GET ${req.path}`)
        const contact = contacts.find(contact => contact.name === name)
        
        if (contact === undefined) {
            return res.status(404).send('Contact not found')
        }
        
        res.status(200).json(contact)
    })


    // UPDATE
    app.patch('/api/v1/:name', (req, res) => {
        // Validate request body
        const result = validatePartialContact(req.body)
        
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }
        
        // Search for wanted contact
        const name = req.params.name
        const contactIndex = contacts.findIndex(contact => contact.name === name)
        
        if (contactIndex === -1) {
            return res.status(404).send('Contact not found')
        }
        
        // Update contact
        const updatedContact = {
            ...contacts[contactIndex], // Copia todas las propiedades del contacto existente
            ...result.data // Sobrescribe las propiedades actualizadas desde result.data
        };
        console.log(result, updatedContact)
        contacts[contactIndex] = updatedContact;
        res.json(updatedContact);
    })


    // DELETE
    app.delete('/api/v1/:name', (req, res) => {
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