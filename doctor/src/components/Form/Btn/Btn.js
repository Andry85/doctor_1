import React from 'react';
import './Btn.scss';
import { connect } from 'react-redux';
import axios from "axios";


class Btn extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      status: false,
      mailwasSent: false
    }
  }


  handleOnClick = (event) => {
    event.preventDefault();
    console.log(this.props.values);

    axios({
      method: "POST", 
      url:"http://localhost:4202/send", 
      data:  this.props.values
    }).then((response)=>{
      if (response.data.status === 'success'){
        this.setState(state => ({
          status: true,
          mailwasSent: true
        }));

        setTimeout(() => {
          this.setState(state => ({
            status: false,
            mailwasSent: false
          })); 
        }, 3000);

      }else if(response.data.status === 'fail'){
        this.setState(state => ({
          status: false,
          mailwasSent: true
        })); 
        
        setTimeout(() => {
          this.setState(state => ({
            status: false,
            mailwasSent: false
          })); 
        }, 3000);

      }
    })

  }


 

  render() {

    const status = this.state.status;
    const wasSent = this.state.mailwasSent;
    let  sucsessText;
    if (status && wasSent) {
      sucsessText = <p className="sent sent-secces">Message Sent.</p>;
    } else if (!status && wasSent) {
      sucsessText = <p className="sent sent-error">Message failed to send.</p>;
    }

    return (
        <div>
          <button 
            className="btn"
            onClick={this.handleOnClick} 
          >
            {this.props.text}
          </button>
          {/* {this.state.status ? <p className="sent">Message Sent.</p> : ''} */}
          {sucsessText}
        </div>
    )
  }

}

// Map Redux state to React component props
const mapStateToProps = (state) => {
  let values = state.getFormDataReduced;
  return {
    values
  }
}

// Connect Redux to React
export default connect(mapStateToProps)(Btn);
