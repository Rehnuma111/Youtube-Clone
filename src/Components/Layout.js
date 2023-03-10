import React, { Component } from 'react'
import Header  from '../Components/Header'

export default class Layout extends Component {
  render() {
    return (
      <div className=''>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}
