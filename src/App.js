import React, { Component } from 'react';
import './App.css';
import { Button, NavBar, Icon } from 'antd-mobile';

fetch("/j/category/").then(res=>res.json()).then(data=>{
  console.log(data)
})

class App extends Component {
  handleAlert(){
    alert(11)
  };
  render() {
    return (
      <div className="App">
        <div>
          <NavBar leftContent="back"
            mode="light"
            onLeftClick={() => console.log('onLeftClick')}
            rightContent={[
              <Icon key="0" type="search" style={{ marginRight: '0.32rem' }} />,
              <Icon key="1" type="ellipsis" />,
            ]}
          >NavBar</NavBar>
        </div>
        <Button onClick={this.handleAlert}>Start</Button>
      </div>
    );
  }
}

export default App;
