import React, { Component } from 'react';
import { connect } from 'react-redux';


class Wallet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3 className='balance'>Wallet Balance: {this.props.balance}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    balance: state,
  }
}


export default connect( mapStateToProps ,null)(Wallet);
