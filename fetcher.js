const request = require('request');
const fs = require('fs')


  request('https://www.google.com/', (error, response, body) => {
    if (error) throw error

    fs.writeFile(`google.txt`, body, (err) => {
      if (err) throw err;
      console.log('File Saved!');
    })

  });



