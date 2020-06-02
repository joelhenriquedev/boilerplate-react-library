
 import React from 'react';
import ReactDOM from 'react-dom';

import ExampleComponent from 'boilerplate-react-library';

import photo from './photo.jpg'

ReactDOM.render(
    <ExampleComponent
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut."
        photo={photo}
        handleClick={() => alert('Hello')}
    />, document.getElementById('root'));
