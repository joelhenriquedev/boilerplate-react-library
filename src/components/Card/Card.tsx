import * as React from 'react';

import './styles.css'
import './styles.scss'

import { CardProps } from './../../interfaces'

const Card: React.FC<CardProps> = (props: CardProps) => {
    return (
        <div className="card">
            <header className="card__header">
                <img src={props.photo} />
            </header>
            <main className="card__description">
                {props.text}
            </main>
            <footer className="card__action">
                <button
                    onClick={(event: React.MouseEvent) => {props.handleClick(event)}}>
                        read
                    </button>
            </footer>
        </div>
    );
};

export default Card;
