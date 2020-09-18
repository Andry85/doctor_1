import React from 'react';
import './Switch.scss';
import { connect } from 'react-redux';

import { changeTime } from '../../actions/switcherActions';

class Switch extends React.Component {

  handleSwitcher = () => {
    this.props.sendTime(this.props.isLigth);
    this.props.parentCallback(!this.props.isLigth);
  }

  render() {
    return (
      <div className="switch"  onClick={this.handleSwitcher}>
        <span 
        className={
          this.props.isLigth ? 
          'switch__icon' : 
          'switch__icon switch__icon--night'
        }
        ></span>
      </div>
    );
  }

}

// Map Redux state to React component props
const mapStateToProps = (state) => {
  let isLigth = state.switcherReducer.isLigth;
  return {
	  isLigth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendTime: (time) => {
      dispatch(changeTime(time))
    }
  }
}

// Connect Redux to React
export default connect(mapStateToProps, mapDispatchToProps)(Switch)
