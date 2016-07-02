import React, { PropTypes, Component } from 'react';
import PureComponent from 'react-pure-render/component';
import jetpack from 'fs-jetpack';

class FileContent extends PureComponent {

  handleDirectoryClick(path, e) {
    e.preventDefault();
  }

  render() {
    const { path } = this.props;
    var obj = jetpack.read(path, 'json');

// get the python thing doing something useful
    // var changedir = require('child_process').spawn('cd', ['/Users/mklarmann/Documents/workspace/miniconda3']);

    // var source = require('child_process').spawn('source', ['/Users/mklarmann/Documents/workspace/miniconda3/bin/activate']);
    //
    // source.stdout.on('data', (data) => {
    //   console.log(`stdout: ${data}`);
    // });
    //
    // source.stderr.on('data', (data) => {
    //   console.log(`stderr: ${data}`);
    // });
    //
    // source.on('close', (code) => {
    //   console.log(`child process exited with code ${code}`);
    // });


    const spawn = require('child_process').spawn;
    const ls = spawn('python', ['./hello.py',path]);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });

// get the python thing doing something useful

    console.log(obj);
    // JSON.parse(data) //turn to js object
    return (

      <form className="FileContent">
       <div className="header-UnitProcess">
         <h2>{obj['reference product']}</h2>
       </div>
       <div class="exchanges">
          <ul>
          {obj.exchanges.map(exchange => {
            return (
              <li>
                <h3>{exchange.name}</h3><p>amount: {exchange.amount} {exchange.unit}</p>
                Comment: <input type="text" value={exchange.comment} />
              </li>
            )})
          }
          </ul>


       </div>
       <div class="other">
          <h3>Nutrition</h3>
          <h3>Synonymes</h3>
          <h3>Translations</h3>
          <h3>Pedigree</h3>
       </div>
     </form>

    );
  }
}



FileContent.propTypes = {
  path: PropTypes.string.isRequired,
};


export default FileContent;
