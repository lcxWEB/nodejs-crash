import url from 'url';
import path from 'path';


const filePath = './dir1/dir2/test.txt';

// basename()
console.log(path.basename(filePath));

console.log(path.dirname(filePath));

console.log(path.extname(filePath));


console.log(path.parse(filePath));

// file:/dir1/...
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename, __dirname);

// join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath2);

// resolve()
const filePath3 = path.resolve(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(filePath3);