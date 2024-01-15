import fs from 'fs/promises'


export const readJSON = async (path) => {
    try {
        const content = await fs.readFile(path, 'utf-8')
        return JSON.parse(content)
    } catch (error) {
        console.error(`Error occurred reading ${path} : error`)
        throw error
    }
}

export const writeJSON = async (path, data) => {
    try {
        await fs.writeFile(path, JSON.stringify(data), 'utf-8')
    } catch (error) {
        console.error(`Error occurred writing ${path} : error`)
        throw error
    }
}
