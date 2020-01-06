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
      text,
      photo
    } = this.props

    return (
      <div className="card">
        <header className="card__header">
          <img src={photo} />
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
