import { ContactModel } from '../models/local-json.js'
import { validateContact, validatePartialContact, validateParam } from '../schemas/contact.js'



export class ContactsController {
    static async getAll (req, res) {
        const age = req.query.age
        const contacts = await ContactModel.getAll({ age })
        res.status(200).json(contacts)
    }
    
    static async getContact (req, res) { 
        const { id } = req.params
        const result = validateParam(id)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.getById({ id: result.data })
        
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
        const result = validateParam(id)
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
        const param = validateParam(id)
        const result = validatePartialContact(req.body)
        if (!param.success || !result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.update({ id: result.data, input: req.body })
        if (!contact) {
            return res.status(404).send('Contact not found')
        }

        res.status(200).json(contact)
    }
}
