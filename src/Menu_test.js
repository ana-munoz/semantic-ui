import 'semantic-ui-css/semantic.min.css'
import { Image, Button, Icon, Label, Menu} from 'semantic-ui-react'
import MyModal from './MyModal';
import React from "react";


export  function Menu_test() {

  var [openModal, setOpenModal] = React.useState(false);

  const imgtest = () => (<Image size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' wrapped />)
  
  console.log("modal state", openModal);
  
  return (
    <div className="App">
       <Menu>
        <Menu.Item
          name='editorials'          
          onClick={(this.imgtest)}
        >
          Editorials
          
        </Menu.Item>

        <Menu.Item
          name='reviews'
          
          onClick={()=>console.log("click menu 2")}
        >
          Reviews
        </Menu.Item>

        <Menu.Item
          name='upcomingEvents'          
          onClick={()=>console.log("click menu 3")}
        >
          Upcoming Events
        </Menu.Item>
      </Menu>
       <Button as='div' labelPosition='right' onClick={(e,d)=>setOpenModal(true)}>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
      <Label as='a' basic pointing='left'>
        2,048
      </Label>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic pointing='right'>
        2,048
      </Label>
      <Button icon>
        <Icon name='heart' />
        Like
      </Button>
    </Button>
    <Button as='div' labelPosition='left'>
      <Label as='a' basic>
        2,048
      </Label>
      <Button icon>
        <Icon name='fork' />
      </Button>
    </Button>
    <MyModal visible={openModal} onClose={()=>{console.log("close"); setOpenModal(false);}} />
    </div>
  );
}