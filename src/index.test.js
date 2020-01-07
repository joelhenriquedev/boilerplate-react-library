import React from 'react';
import Card from './index';
import renderer from 'react-test-renderer';
import photo from '../example/src/photo.jpg'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Card 
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut."
        photo={photo}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});