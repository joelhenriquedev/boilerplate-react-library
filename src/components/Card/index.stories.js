import React from 'react';
import Card from './Card';
import photo from './../../assets/photo.jpg'

export default { title: 'Card' };

export const main = () => (
    <Card 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut."
        photo={photo}
    />
);