import walker from 'walker';

module.exports = function directoryWalk(path, callback, progressStep = 100) {
  let entries = [];

  let callbackValid = typeof callback === 'function';

  return new Promise((resolve, reject) => {
    walker(path)
      .on('file', (entry, stat) => {
          entries.push({
            path: entry,
            dir: false
          });

          if(callbackValid){
            if(entries.length % progressStep === 0){
              callback(entries.length);
            }
          }
      })
      .on('error', (error, entry, stat) => {
        reject(error, entry, stat);
      })
      .on('end', () => {
        resolve(entries);
      }
      );
  });
};
