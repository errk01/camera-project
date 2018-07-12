import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import {connect }from 'react-redux';
  import {addToCart }from '../redux/action';
  import {showOnSale }from '../redux/action';
  import {bindActionCreators} from 'redux';
  

const Camera = ({camera, addToCart}) => {
  return (
    <div>
      <Card>
        <CardImg top width="30%" src={`${camera.picture}`}alt="Card image cap" />
        <CardBody>
          <CardTitle>{camera.name}</CardTitle>
          <CardSubtitle>{camera.price}</CardSubtitle>
          <CardText>{camera.rating}</CardText>
          <Button
            onClick={()=> addToCart(camera.id)}
            >
            Add to Cart
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapDispatchToProps = dispatch =>bindActionCreators({
  addToCart,
  showOnSale
}, dispatch)

export default connect(null, mapDispatchToProps)(Camera);