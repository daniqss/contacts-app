import { ageFromBirthday } from '../../utils/age.js'
import { randomUUID } from 'node:crypto'
import { readJSON, writeJSON } from '../../utils/read-json.js'

const jsonPath = './database/contacts.json'
const contacts = await readJSON(jsonPath)

export class ContactModel {
    static async getAll ({ age }) {
        if (age != null) {
            console.log('age', age)
            // eslint-disable-next-line eqeqeq
            return contacts.filter(contact => ageFromBirthday(contact.birthday) == age)
        }
        
        return contacts
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
        writeJSON(jsonPath, contacts)
        return newContact
    }

    static async delete ({ id }) {
        const index = contacts.findIndex(contact => contact.id === id)
        if (index === -1) {
            return null
        }
        const deletedContact = contacts[index]
        contacts.splice(index, 1)
        writeJSON(jsonPath, contacts)
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
        writeJSON(jsonPath, contacts)
        return updatedContact
    }
}
