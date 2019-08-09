import React, { Component } from 'react'

class Acordion extends Component {
  state = { isOpen: false }

  handletToggle = () => {
    const { isOpen } = this.state
    this.setState({ isOpen: !isOpen })
  }

  render () {
    const { isOpen } = this.state
    return (
      <div className="acordion">
        <div
          onClick={() => this.handletToggle()}
          className="acordion-header"
        >
          <span>Last searches</span>
          {isOpen
            ? <i className="fas fa-times-circle"></i>
            : <i className="fas fa-plus-circle"></i>}
        </div>
        {isOpen && (
          <div className="acordion-content">
            <ul>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
              <li>Hello</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Acordion
