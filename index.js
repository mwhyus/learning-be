const fs = require('fs');
const http = require('http')
const url = require('url')

// // Blocking, synchronous way
// const textIn = fs.readFileSync('./text/test.txt', 'utf8')
// console.log(textIn);

// const textOut = `ini text in gan aowkowkaok: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./text/output.txt', textOut);
// console.log('file written!')

// Non-Blocking, asynchronous way || Calback hell case
// fs.readFile('./text/start.txt', 'utf-8', (err, data1) => {
//   if (data1) {
//     fs.readFile(`./text/${data1}.txt`, 'utf-8', (err, data2) => {
//       fs.readFile(`./text/append.txt`, 'utf-8', (err, data3) => {
//         fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//           if (err) console.log('err?', err);
  
//           console.log('your data has been written gan awokawok')
//         })
//       })
//     })
//   }

//   if (err) console.log('error ganzzz :(')
// })

// console.log('Will read file!');

// SERVER

const data = fs.readFileSync(`${__dirname}/text/listFruit.json`, 'utf-8');

const server = http.createServer((req, res) => {
  const pathName = req.url;
  const pathUrl = ['/', '/overview'];

  if (pathUrl.includes(pathName)) {
    return res.end('This is overview');
  } if (pathName === '/product') {
    return res.end('This is the product');
  } if (pathName === '/api') {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world'
    });
    res.end('<h1>Ga nemu gan</h1>');
  }
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Listening request on port 8080')
})
