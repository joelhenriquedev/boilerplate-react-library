import * as React from 'react';
import Card from './Card'
import photo from '../../assets/photo.jpg'
import { shallow } from 'enzyme';

describe('Card component', () => {

    it('renders without crashing', () => {
        shallow(<Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut."
            photo={photo}
            handleClick={() => {
                alert('Hello!')
            }}
        />);
    });

})