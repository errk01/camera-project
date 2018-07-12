import React from 'react';
import { Navbar,NavbarBrand } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="success" light expand="md">
          <NavbarBrand href="/">Camera Shop</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
