const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);

const fetcher = function(args) {
  const url = args[0];
  const path = args[1];

  request(url, function(error, response, body) {
    if (error) {
      throw Error('Oooooops something went wrong');
    }

    if (response.statusCode === 200) {
      fs.writeFile(__dirname + '/' + `${path}`, body, (err) => {
        throw Error('Something went wrong writing a file');
      });
    }
  });

};

fetcher(args);