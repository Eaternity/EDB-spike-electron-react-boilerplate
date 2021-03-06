import React, { PropTypes, Component } from 'react';
import {ipcRenderer} from  'electron';


class DirectoryBar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      path: this.props.path || ''
    };

    ipcRenderer.on('open-dir-dialog-reply', (event, dirPath) => {
      if(dirPath){
        props.onSetPath(dirPath[0]);
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({path: nextProps.path});
  }

  handleClick(e) {
    this.props.onSetPath(this.state.path);
  }

  handleEnter(e) {
    if(e.which === 13){
      this.handleClick();
    }
  }

  handleChange(e) {
    this.setState({path: e.target.value});
  }

  handleDialog(){
    ipcRenderer.send('open-dir-dialog');
  }

  handleBack(){
    this.props.onBack();
  }

  render() {
    const { onSetPath, loading, error } = this.props;
    return (
      <div className="DirectoryBar">
        <button className="BackButton" onClick={this.handleBack.bind(this)}><i className="fa fa-arrow-left"></i></button>
        <button className="DialogButton" onClick={this.handleDialog}><i className="fa fa-search"></i></button>
        <input
          type="text"
          className={error ? 'hasError' : null}
          value={this.state.path}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleEnter.bind(this)}
          placeholder="Select a Brightway2 JSON Database"/>
        <button className="OkButton" onClick={this.handleClick.bind(this)}>
          {loading ? (<i className="fa fa-cog fa-spin"></i>) : (<i className="fa fa-arrow-right"></i>)}
        </button>
      </div>
    );
  }
}

DirectoryBar.propTypes = {
  path: PropTypes.string,
  onSetPath: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired
};


export default DirectoryBar;
