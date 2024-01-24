import {
    validateContact,
    validatePartialContact,
    validateName,
    validateId 
} from '../schemas/contactValidation.js'

let ContactModel
await (async (env) => {
    let module
    if (env === 'production') {
        module = await import('../models/mongodb/contact.js')
    } else if (env === 'development') {
        module = await import('../models/json/contact.js')
    } else if (env === 'test') {
        module = await import('../models/json/contact.js')
    } else {
        throw new Error('Invalid environment')
    }
    ContactModel = module.default
})(process.env.NODE_ENV)



export class ContactsController {
    static async getAll (req, res) {
        const age = req.query.age
        const contacts = await ContactModel.getAll({ age })
        res.status(200).json(contacts)
    }
    
    static async getContact (req, res) { 
        const { name } = req.params
        const result = validateName(name)

        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        // In case of various contacts with the same name, return an array
        const contact = await ContactModel.getContact({ name: result.data })
        
        if (!contact) {
            return res.status(404).send('Contact not found')
        }
        res.status(200).json(contact)
    }

    static async create (req, res) {
        const result = validateContact(req.body)

        if (!result.success) {
            console.error(result.error.message)
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }
        const newContact = await ContactModel.create({ contact: result.data })

        res.status(201).json(newContact)
    }

    static async delete (req, res) {
        const { id } = req.params
        const result = validateId(id)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.delete({ id: result.data })
        
        if (!contact) {
            return res.status(404).send('Contact not found')
        }
        res.status(200).json(contact)
    }

    static async update (req, res) {
        const { id } = req.params
        const param = validateId(id)
        const result = validatePartialContact(req.body)
        if (!param.success) {
            return res.status(400).json({ error: JSON.parse(param.error.message) })
        }
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.update({ id: param.data, input: result.data })
        if (!contact) {
            return res.status(404).send('Contact not found')
        }

        res.status(200).json(contact)
    }
}
