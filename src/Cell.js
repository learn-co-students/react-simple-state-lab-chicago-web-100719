import React from 'react'

export default class Cell extends React.Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  clickEvent = () => {
    if(this.state.color === this.props.value){
      this.setState({
        color: '#333'
       })
    }
    else if(this.state.color === '#333'){
      this.setState({
        color: this.props.value
      })
    }
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickEvent}></div>
    )
  }
}