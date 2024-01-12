import { randomUUID } from 'node:crypto'
import { readJSON, writeJSON } from '../utils/read-json.js'


const contacts = readJSON('./contacts.json')
    .catch(error => {
        console.error('Error al leer el archivo JSON:', error);
    });

export class ContactModel  {
    static async getAll({ age = null }) {
        if (age === null) {
            return contacts
        }
        return contacts.filter(contact => contact.age === age)
    }

    static async getById(id) {
        return contacts.find(contact => contact.id === id)
    }

    static async getByName(name) {
        return contacts.find(contact => contact.name === name)
    }

    static async create(contact) {
        const newContact = {
            ...contact,
            id: randomUUID()
        }
        contacts.push(newContact)
        
        return newContact
    }

    static async delete(id) {
        const index = contacts.findIndex(contact => contact.id === id)
        if (index === -1) {
            return false
        }

        contacts.splice(index, 1)
        return true
    }

    static async update({ id, input }) {
        const index = contacts.findIndex(contact => contact.id === id)
        const contact = contacts[index]

        const updatedContact = {
            ...contact,
            ...input
        }

        contacts[index] = updatedContact
        return updatedContact
    }

}