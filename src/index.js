/**
 * @class ExampleComponent
 */

import React from 'react'

import style from './styles.css'
import './styles.scss'

export default (props) => {
  return (
    <div className="card">
      <header className="card__header">
        <img src={props.photo} />
      </header>
      <main className="card__description">
        {props.text}
      </main>
      <footer className="card__action">
        <button>read</button>
      </footer>
    </div>
  )
}

