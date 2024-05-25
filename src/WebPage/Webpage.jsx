import React, { Component } from 'react'
import Header from './Header'
import Content from './Content'
import Content1 from './Content1'
import Footer from './Footer'
export default class Webpage extends Component {
  render() {
    return (
      <div className='App'>
        <div className='bg-black'>
          <div className='container'>
            <Header></Header>
          </div>
        </div>
        <div className='container py-5'>
            <Content></Content>
        </div>
        <div className='container pt-4'>
            <Content1></Content1>
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    )
  }
}
