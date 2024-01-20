import { ageFromBirthday } from '../../utils/age.js'
import { MongoClient, ServerApiVersion } from 'mongodb' 
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.xxsuhnj.mongodb.net/?retryWrites=true&w=majority`
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

async function connect () {
    try {
        await client.connect()
        const database = client.db('database')
        return database.collection('contacts')
    } catch (error) {
        console.error('Error connecting to the database')
        console.error(error)
        await client.close()
    }
}

export class ContactModel {
    static async getAll ({ age = null }) {
        const db = await connect()
        const contacts = db.find({}).toArray()
        
        if (age != null) {
            // eslint-disable-next-line eqeqeq
            return contacts.filter(contact => ageFromBirthday(contact.birthday) == age)
        }
        return contacts
    }

    // static async getContact ({ name }) {
    //     const contact = contacts.filter(contact => contact.name === name)

    //     switch (contact.length) {
    //         case 0:
    //             return null
    //         case 1:
    //             return contact[0]
    //         default:
    //             return contact
    //     }
    // }

    // static async create ({ contact }) {
    //     const newContact = {
    //         id: randomUUID(),
    //         ...contact
    //     }
    //     contacts.push(newContact)
    //     writeJSON(jsonPath, contacts)
    //     return newContact
    // }

    // static async delete ({ id }) {
    //     const index = contacts.findIndex(contact => contact.id === id)
    //     if (index === -1) {
    //         return null
    //     }
    //     const deletedContact = contacts[index]
    //     contacts.splice(index, 1)
    //     writeJSON(jsonPath, contacts)
    //     return deletedContact
    // }

    // static async update ({ id, input }) {
    //     const index = contacts.findIndex(contact => contact.id === id)
    //     const contact = contacts[index]

    //     const updatedContact = {
    //         ...contact,
    //         ...input
    //     }

    //     contacts[index] = updatedContact
    //     writeJSON(jsonPath, contacts)
    //     return updatedContact
    // }
}

