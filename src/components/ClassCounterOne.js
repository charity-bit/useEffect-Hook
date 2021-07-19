import React, { Component } from 'react'

 class ClassCounterOne extends Component {
constructor(props){
    super(props)
    this.state = { 
        count:0 
    }
}
 //componentDidMount is called immideatly after the component mounts
 componentDidMount(){
    document.title = `Clicked ${this.state.count} times` //at initial
 }

 //componentDidUpdate is called immideatly after updating occurs
 componentDidUpdate(prevProps,prevState){
     document.title = `Clicked ${this.state.count} times` //at update
 }
  render() {
    return (
      <div>
        <button onClick={()=> this.setState({count: this.state.count + 1})}>
            click {this.state.count} times
        </button>
      </div>
    )
  }
}
 export default ClassCounterOne;