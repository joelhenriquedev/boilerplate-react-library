/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import style from './styles.css'
import './styles.scss'

export default class ExampleComponent extends Component {
  static propTypes = {
    text: PropTypes.string
  }

  render() {
    const {
      text
    } = this.props

    return (
      <div className="card">
        <header className="card__header">
          <img src="https://images.unsplash.com/photo-1565843248736-8c41e6db117b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
        </header>
        <main className="card__description">
          {text}
        </main>
        <footer className="card__action">
          <button>read</button>
        </footer>
      </div>
    )
  }
}
