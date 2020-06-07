import React from "react";
import { create } from "react-test-renderer";
import Card from './../src/components/Card'
import photo from './../src/assets/photo.jpg'

describe("Button component", () => {
    test("Matches the snapshot", () => {
        const button = create(<Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut."
            photo={photo}
            handleClick={() => alert('Hello')}
        />);
        expect(button.toJSON()).toMatchSnapshot();
    });
    test("it shows the expected text when clicked (testing the wrong way!)", () => {
        const component = create(<Card
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut."
            photo={photo}
            handleClick={() => alert('Hello')}
        />);
        const instance = component.root;
        expect(instance.props.text).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel odio libero. Nulla arcu enim, ultrices at nibh sed, iaculis efficitur urna. Donec et felis a nunc porta cursus. Duis accumsan nunc diam, sed suscipit libero sodales ut.");
      });
});


