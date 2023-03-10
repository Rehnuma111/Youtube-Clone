import React, { Component } from 'react';
import avatarImage from "../assests/avatar.jpg"

export default class Avatar extends Component {
constructor(props){
    super(props);
    this.state={};
}


  render() {
    return (
      <div 
      className={`rounded-full overflow-hidden h-12 w-12
      `}
      >
        <img src={this.props.src ||avatarImage} alt="avatart"/>
      </div>
    )
  }
}
