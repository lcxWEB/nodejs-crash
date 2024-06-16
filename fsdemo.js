// import fs from 'fs';
import fs from 'fs/promises'

// // readFile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data) => {
//     if (err) {
//         throw err;
//     }
//     console.log(data);
// });

// // readFileSync() - Synchronous version
// const data = fs.readFileSync('./test.txt', 'utf-8');
// console.log(data);


// readFile() - Promise .then
// fs.readFile('./test.txt', 'utf-8')
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// });


// readFile() - async/await
const readFile = async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log("async/await read: \n\t" + data);
    } catch (error) {
        console.log(error);
    }
}


// writeFile()
const writeFile = async () => {
    try {
        await fs.writeFile('./test.txt', 'Hello Jhon this new content');
        console.log('File written to...');
    } catch (err) {
        console.log(err);
    }
}


// appendFile()
const appendFile = async () => {
    try {
        await fs.appendFile('./test.txt', '\nthis is appended text');
        console.log('File appended to...');
    } catch (err) {
        console.log(err);
    }
}



writeFile();
appendFile();
readFile();