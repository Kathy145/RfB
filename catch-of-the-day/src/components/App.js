import React from 'react'
import StorePicker from "./StorePicker";
import Header from './Header';
import Inventory from './Inventory'
import Order from './Order'

class App extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline='CodeMeKathy' />
          </div>
          <Order />
          <Inventory/>
        </div>


      </React.Fragment>
    )
  }
}

export default App
