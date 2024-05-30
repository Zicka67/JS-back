import {readFile} from 'node:fs/promises'
// Module node pour afficher le chemin du fichier/dossier
import {fileURLToPath} from 'node:url'
// Module node pour afficher le dossier parent (join pour concatener)
import {dirname, join} from 'node:path'

const dir = (dirname(fileURLToPath(import.meta.url)))
const filename = join(dir, 'demo-deep.txt')
console.log(await readFile(filename, {encoding: 'utf8'}))

// console.log(await readFile('demo-deep.txt'))