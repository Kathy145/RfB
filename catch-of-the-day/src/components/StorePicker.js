import React from 'react'

class StorePicker extends React.Component {
  render(){
    return (
      <React.Fragment>
      <form action="" className="store-selector">
        <h3>Please Enter A Store</h3>
        <input type="text" required placeholder='StoreName'/>
        <button type="submit"> Visit Store -> </button>
      </form>
      </React.Fragment>
      )
  }
}

export default StorePicker 
