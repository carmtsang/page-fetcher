const request = require('request');
const fs = require('fs');

//command line takes in 2 arguments - a url (url) and local file path (localPath)
const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1]

//download the resources at the URL to the local path
//upon completion, it should print out a message

request(url, (error, response, body) => {
  
  
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.log(err)
      return;
    }
    fs.stat(localPath, (err, stats) => { //get file size in bytes
      if (err) {
        console.log(err)
        return;
      }
      console.log(`Downloaded and saved ${stats.size} bytes to ${localPath}`)
    });
  });




  //print out message to terminal
});