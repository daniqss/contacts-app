import { exit } from 'process'
import { readFile, writeFile } from 'fs/promises'

export const readJSON = async (path) => {
    try {
        return JSON.parse(await readFile(path, 'utf-8'))
    } catch (error) {
        console.error(`Error occurred reading ${path}\n`)
        console.error(error)
        process.exit(1)
    }
}

export const writeJSON = async (path, data) => {
    try {
        await writeFile(path, JSON.stringify(data), 'utf-8')
    } catch (error) {
        console.error(`Error occurred writing ${path}\n`)
        console.error(error)
        exit(1)
    }
}
