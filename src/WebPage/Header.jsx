import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div>
            <p className='tx-white'>Start Bootstrap</p>
        </div>
        <div className="tx-white" id="navbarNavAltMarkup">
          <div className="">
            <a className="nav-link" aria-current="page" >Home</a>
            <a className="nav-link" >Features</a>
            <a className="nav-link" >Pricing</a>
          </div>
        </div>
      </div>
    )
  }
}
