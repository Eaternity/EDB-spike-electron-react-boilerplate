import React, { PropTypes, Component } from 'react';
import FileItem from '../components/FileItem';
import PureComponent from 'react-pure-render/component';

class FileTable extends PureComponent {

  render() {
    const { files, actions } = this.props;
    return (
      <table className="FileList">
      <thead>
        <tr>
          <td>Type</td>
          <td>Name</td>
          <td>Size</td>
        </tr>
      </thead>
      <tbody>
        {files.map(file => {
          return (
            <FileItem path={file.path}
                      onSetPath={actions.updateTree}
                      key={file.path} />
          )})
        }
      </tbody>
      </table>
    );
  }
}

FileTable.propTypes = {
  files: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


export default FileTable;
