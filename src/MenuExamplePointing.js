import React, { Component } from 'react'
import { Button, Popup,Image, Menu, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { Countdown } from './Countdown';



export class MenuExamplePointing extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  constructor(props){
    super(props)
    this.shoot = this.shoot.bind(this)

  }
  shoot(){
    alert("SIKE!");
  }
  

  render() {

    
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.shoot}
          />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          
          
        </Menu>

        <Segment>
          <Countdown/>
          
          <Popup
            content='I will not flip!'
            on='click'
            pinned
            trigger={<Button content='Button' />}
          />
                   
          
        </Segment>
      </div>
    )
  }
};
