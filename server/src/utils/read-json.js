import fs from 'fs/promises';
import path from 'path';


export const readJSON = async (relativePath) => {
    try {
        const absolutePath = path.resolve(__dirname, relativePath);
        const content = await fs.readFile(absolutePath, 'utf-8');
        return JSON.parse(content);
    } catch (error) {
        console.error('Error al leer el archivo JSON:', error);
        throw error;
    }
};

export const writeJSON = async (path, data) => {
    const absolutePath = path.resolve(path)

    try {
        await fs.writeFile(absolutePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log('Datos escritos exitosamente en el archivo JSON.');
    } catch (error) {
        console.error('Error al escribir en el archivo JSON:', error);
        throw error;
    }
};
