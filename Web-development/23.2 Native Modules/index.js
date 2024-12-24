const fs = require('fs');

// fs.writeFileSync("message.txt","Hello from node.js", (err) => {
//     if (err) throw err;
//     console.log('successfully added message to file'); 
// });

fs.readFile("message.txt",'utf8',(err, data) => {
    if (err) throw err;
    console.log(data);
  }); 