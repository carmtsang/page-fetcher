const request = require('request');
const fs = require('fs');

//command line takes in 2 arguments - a url (url) and local file path (localPath)
const args = process.argv.slice(2);
const url = args[0];
const localPath = args[1]

//download the resources at the URL to the local path
//upon completion, it should print out a message

request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  fs.writeFile(localPath, body, err => {
    if (err) {
      console.log(err)
    }
  })

  //print out message to terminal
  //console.log(`Downloaded and saved ${data} bytes to ${localPath}`)
});