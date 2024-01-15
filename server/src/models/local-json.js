import { randomUUID } from 'node:crypto'
import { readJSON, writeJSON } from '../utils/read-json.js'


const contacts = await readJSON('./contacts.json')

export class ContactModel {
    static async getAll ({ age = null }) {
        console.log(contacts)
        if (age === null) {
            return contacts
        }
        return contacts.filter(contact => contact.age === age)
    }

    static async getContact (id) {
        return contacts.find(contact => contact.id === id)
    }

    static async create ({ contact }) {
        const newContact = {
            id: randomUUID(),
            ...contact
        }
        console.log(newContact)
        console.log(contact)
        contacts.push(newContact)
        
        return newContact
    }

    static async delete (id) {
        const index = contacts.findIndex(contact => contact.id === id)
        if (index === -1) {
            return false
        }

        contacts.splice(index, 1)
        writeJSON('./contacts.json', contacts)
        return true
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
