import { createReadStream } from "node:fs";
import { createServer } from "node:http";

//penser a bien mettre req et res pour la requete et la response 
const server = createServer((req, res) => {
    const url = new URL (req.url, `http://${req.headers.host}`)

    res.write(`Bonjour ${url.searchParams.get('name')}`)
    //pipe pour prendre d'un flux de lecture et l'envoyer dans un flux d'écriture
    file.on('end', () => {
        res.end()
    })

    // const file = createReadStream('index.html')
    // res.writeHead(200, {
    //     'Content-Type' : 'text/html'
    // })
    // file.pipe(res)

    // file.on('end', () => {
    //     res.end()
    // })
})
server.listen('8888')





//**Lire un ou plusieurs fichiers
//**encoding pour lire le fichier en utf8 
//**Promise.all pour lire plusieurs fichier en même temps avec le système de promesse

// import {readFile} from 'node:fs/promises'

// const content = await Promise.all([ 
//     readFile("demo.txt", {encoding: 'utf8'}),
//     readFile("app.js", {encoding: 'utf8'})
// ])
// console.log(content)


//**Pour écrire
// import {writeFile} from 'node:fs/promises'

// await writeFile("demo.txt", "Bonjour à tous", {

// })

//** Pour copier un fichier 
// import {copyFile} from 'node:fs/promises'

// await copyFile("demo.txt", "Bonjour à tous", {

// })

//** Pour copier un supprimer
// import {unlink} from 'node:fs/promises'

// await unlink("demo.txt", "Bonjour à tous", {

// })

//** Pour afficher les stats d'un fichier
// import {stat, writeFile} from 'node:fs/promises'

// const i = await stat("demo.txt")
// console.log(i)

//** Pour ouvrir un fichier
// import {open} from 'node:fs/promises'

// const file = await open('demo.txt', 'a')
// file.write('Hello')
// file.close()

// ** test exercice
// import {readdir, stat} from 'node:fs/promises'

// const files = await readdir('./', {withFileTypes: true})
// for (const file of files) {
//     const {size} = await stat(file.name)
//     console.log(`${file.isDirectory() ? 'D' : 'F'} - ${file.name} - ${size}o`)
// }

