import React from 'react';
import './Input.scss';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {changeName, changePhone, changeEmail} from '../../../actions/getDataActions';

class Input extends React.Component {
 

  handleOnChange = (event) => {

    if (this.props.data === 'name') {
      this.props.sendName(event.target.value);
    } else if (this.props.data === 'tell') {
      this.props.sendPhone(event.target.value);
    } else if (this.props.data === 'email') {
      this.props.sendEmail(event.target.value);
    }

    
  }

  getInput = () => {
    if (this.props.data === 'name') {
      return this.props.nameField;
    } else if (this.props.data === 'tell') {
      return this.props.telField;
    } else if (this.props.data === 'email') {
      return this.props.emailField;
    }
  }

  render() {

    return (
      <div className="form-field">
        <input
          className="form-field__input" 
          type={this.props.type} 
          placeholder={this.props.text}  
          value={this.getInput()} 
          onChange={this.handleOnChange} 
        />
      </div>
    )
  }

}

// Map Redux state to React component props
const mapStateToProps = (state) => {
  let nameField = state.getFormDataReduced.name;
  let telField = state.getFormDataReduced.tel;
  let emailField = state.getFormDataReduced.email;
  return {
    nameField,
    telField,
    emailField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendName: (dat) => {
      dispatch(changeName(dat))
    },
    sendPhone: (dat) => {
      dispatch(changePhone(dat))
    },
    sendEmail: (dat) => {
      dispatch(changeEmail(dat))
    },
  }
}

// Connect Redux to React
export default connect(mapStateToProps, mapDispatchToProps)(Input);

Input.propTypes = {
  type: PropTypes.string
};
