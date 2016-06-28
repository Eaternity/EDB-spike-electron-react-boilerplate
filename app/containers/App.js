import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/actions';
import DirectoryBar from '../components/DirectoryBar';
import FileCount from '../components/FileCount';
import FileTable from '../components/FileTable';


class App extends Component {

  render() {
    const { path, files, loading, loadedFiles, error, dispatch } = this.props;
    const actions = bindActionCreators(Actions, dispatch);
    return (
      <div className="Root">
        <DirectoryBar path={path} onSetPath={actions.updateTree} onBack={actions.rewindTree} loading={loading} error={error}/>

        <div className="Additional">

          { error ?
            <div className="ErrorMessage">Directory not found</div> :
            <span>
              <FileCount count={files.length} loading={loading} loadedFiles={loadedFiles}/>
            </span>
          }
        </div>

        <FileTable files={files} actions={actions}/>

      </div>
    );
  }
}

App.propTypes = {
  files: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function transformState(state) {
  return {
    path: state.directory.path,
    files: state.directory.files,
    loading: state.directory.loading,
    loadedFiles: state.directory.loadedFiles,
    error: state.directory.error
  };
}

export default connect(transformState)(App);
