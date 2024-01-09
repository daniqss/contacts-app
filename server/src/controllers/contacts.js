import { ContactModel } from "../models/local-json.js";
import { validateContact, validatePartialContact, validateId, validateName } from "../schemas/contact.js";



export class ContactsController {

    static async getAll(req, res) {
        const age = req.query.age
        const contacts = await ContactModel.getAll({age})
        res.status(200).json(contacts)
    }
    
    static async getById(req, res) {
        const {id} = req.params
        const result = validateId(id)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.getById({id: result.data})
        
        if (!contact) {
            return res.status(404).send('Contact not found')
        }
        res.status(200).json(contact)
    }

    static async getByName(req, res) {
        const {name} = req.params
        const result = validateName(name)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.getByName({name: result.data})
        
        if (!contact) {
            return res.status(404).send('Contact not found')
        }
        res.status(200).json(contact)
    }

    static async create(req, res) {
        const result = validateContact(req.body)

        if (!result.success) {
            console.error(result.error.message)
            return res.status(400).json({ "error": JSON.parse(result.error.message) })
        }

        const newContact = await ContactModel.create({ input: result.data })

        res.status(201).json(newContact.data)
    }

    static async deleteById(req, res) {
        const {id} = req.params
        const result = validateId(id)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.delete({id: result.data})
        
        if (!contact) {
            return res.status(404).send('Contact not found')
        }
        res.status(200).json(contact)
    }

    static async deleteByName(req, res) {
        const {name} = req.params
        const result = validateName(name)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.delete({name: result.data})
        if (!contact) {
            return res.status(404).send('Contact not found')
        }

        res.status(200).json(contact)
    }

    static async updateById(req, res) {
        const {id} = req.params
        const result = validateId(id)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.update({id: result.data, input: req.body})
        if (!contact) {
            return res.status(404).send('Contact not found')
        }

        res.status(200).json(contact)
    }

    static async updateByName(req, res) {
        const {name} = req.params
        const result = validateName(name)
        if (!result.success) {
            return res.status(400).json({ error: JSON.parse(result.error.message) })
        }

        const contact = await ContactModel.update({name: result.data, input: req.body})
        if (!contact) {
            return res.status(404).send('Contact not found')
        }

        res.status(200).json(contact)
    }
}