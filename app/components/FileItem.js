import React, { PropTypes, Component } from 'react';
import PureComponent from 'react-pure-render/component';
import FileIcon from './FileIcon';
import FileContent from './FileContent';
import pathNpm from 'path';

class FileItem extends PureComponent {

  handleDirectoryClick(path, e) {
    e.preventDefault();
    this.props.onSetPath(path);
  }

  render() {
    const { path, onSetPath } = this.props;
    return (
      <tr><td>
      <div className="UnitProcess">
        <table>
          <tbody>
            <tr className="FileItem">
              <td className="FileIcon">
                <FileIcon type={pathNpm.extname(path)}/>
              </td>
              <td className="FileName"  onClick={this.handleDirectoryClick.bind(this, pathNpm.dirname(path))}>
                {pathNpm.basename(path)}
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className="FileContent">
              <td>
                <FileContent path={path}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </td></tr>
    );
  }
}

FileItem.propTypes = {
  path: PropTypes.string.isRequired,
  onSetPath: PropTypes.func.isRequired
};


export default FileItem;
