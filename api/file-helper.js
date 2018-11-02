var fs = require('fs');
var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function readFiles(dirname, onFileContent, onError = err => console.log(err)) {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(filename => {
      fs.readFile(dirname + filename, 'utf-8', (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}


function writeFile(path, content) {
  mkdirp(getDirName(path), err => {
    if (err) return cb(err);

    fs.writeFile(path, content);
  });
}

module.exports = {
  readFiles: readFiles,
  writeFile: writeFile
};
