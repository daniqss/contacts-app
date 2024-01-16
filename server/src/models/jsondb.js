import { randomUUID } from 'node:crypto'
import { readJSON, writeJSON } from '../utils/read-json.js'


const contacts = await readJSON('../database/contacts.json')

export class ContactModel {
    static async getAll ({ age = null }) {
        if (age === null) {
            return contacts
        }
        return contacts.filter(contact => contact.age === age)
    }

    static async getContact ({ name }) {
        const contact = contacts.filter(contact => contact.name === name)

        switch (contact.length) {
            case 0:
                return null
            case 1:
                return contact[0]
            default:
                return contact
        }
    }

    static async create ({ contact }) {
        const newContact = {
            id: randomUUID(),
            ...contact
        }
        contacts.push(newContact)
        
        return newContact
    }

    static async delete ({ id }) {
        const index = contacts.findIndex(contact => contact.id === id)
        if (index === -1) {
            return null
        }
        const deletedContact = contacts[index]
        contacts.splice(index, 1)
        writeJSON('./contacts.json', contacts)
        return deletedContact
    }

    static async update ({ id, input }) {
        const index = contacts.findIndex(contact => contact.id === id)
        const contact = contacts[index]

        const updatedContact = {
            ...contact,
            ...input
        }

        contacts[index] = updatedContact
        writeJSON('./contacts.json', contacts)
        return updatedContact
    }
}
