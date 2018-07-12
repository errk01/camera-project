import React from 'react';
import { connect } from 'react-redux'
import Camera from './Camera';
import {Container} from 'reactstrap';
import { FormGroup, Label, Input } from 'reactstrap'


class CameraList extends React.Component  {
  state = {
  filterPhrase: ''
}

  
  render(){
  
  let listOfCameras = this.props.cameras
  .filter(camera => camera.name.includes(this.state.filterPhrase.toLowerCase()))
  .map(camera => <Camera key={camera.id} camera={camera}/>)
  return(
    <div>
    <FormGroup>
          <Label>Search Term</Label>
          
          <Input type="text" onChange={e => this.setState({filterPhrase: e.target.value})} />
          
        </FormGroup>
        
      <Container>{listOfCameras}</Container>
      </div>
  )

}
}
const mapStateToProps = state=>({
  cameras: state.cameras
})

export default connect(mapStateToProps)(CameraList);