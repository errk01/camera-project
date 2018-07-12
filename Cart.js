import React from 'react';
import { Card, Button, CardTitle } from 'reactstrap';
import CartItemsList from './CartItemsList';
import {connect} from 'react-redux';


const Cart = (props) => {
  // let Cartcameras = props.cameras
  // .filter(camera => camera.inCart)
  let tax = (.086).toFixed(2)
  let Total = ((1.086).toFixed(2))
  
  let Cartcameras = props.cameras
      .filter(camera => camera.inCart)

      let totalWithoutTax = Cartcameras.reduce((acc, camera) => {
          let changeToNum = parseFloat(camera.price.replace(/,/g, "").slice(1))
          return acc + changeToNum
      },0)

  
  return(

    <Card body>
      <CardTitle>Cart</CardTitle>
      <CartItemsList cartItem={Cartcameras} />
      <p>Subtitle: {totalWithoutTax} </p>
      <p>Tax: {(totalWithoutTax * .086).toFixed(2)}</p>
      <p>Total: {(totalWithoutTax * 1.086).toFixed(2)}</p>
      <Button>Check Out</Button>
    </Card>

)
}
const mapStateToProps = state =>({
  cameras: state.cameras.filter(cameras => cameras.inCart)
})
export default connect(mapStateToProps)(Cart);