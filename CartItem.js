import React from 'react';
import {removeFromCart} from '../redux/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const CartItem = (props) => {
  return (<div>
    <p>{props.camera.name}</p>
    <button
      onClick={() => props.removeFromCart(props.camera.id)}
      >Remove</button>
  </div>)
};

const mapDispatchToProps = dispatch =>bindActionCreators({
  removeFromCart
}, dispatch)

export default connect(null, mapDispatchToProps)(CartItem);