import React from 'react';
import Walkthrough from '../components/Walkthrough';
import { render, fireEvent, screen, getByLabelText } from '@testing-library/react';

it("should display the next step when the Next Step button is clicked", () => {
  render(<Walkthrough walkthrough={[
    { description: "Boil the water", time: 10},
    { description: "Add the teabag", time: 0}
  ]}/>);
  const nextStepButton = screen.getByText('Next Step')
  nextStepButton.click();
  const secondStep = screen.getByText('2: Add the teabag');
  expect(secondStep).toBeInTheDocument();
});

it("should display the previous step when the Previous Step button is clicked", () => {
  render(<Walkthrough walkthrough={[
    { description: "Boil the water", time: 10},
    { description: "Add the teabag", time: 0}
  ]}/>);
  const nextStepButton = screen.getByText('Next Step')
  const prevStepButton = screen.getByText('Previous Step')
  nextStepButton.click();
  prevStepButton.click();

  const firstStep = screen.getByText('1: Boil the water');
  expect(firstStep).toBeInTheDocument();
});

it("should display the last step when the Next Step button is clicked multiple times", () => {
  render(<Walkthrough walkthrough={[
    { description: "Boil the water", time: 10},
    { description: "Add the teabag", time: 0}
  ]}/>);
  const nextStepButton = screen.getByText('Next Step')
    var array = [1,2,3]
  array.forEach(function () { nextStepButton.click() })
  
  const secondStep = screen.getByText('2: Add the teabag');
  expect(secondStep).toBeInTheDocument();
});

it("should display the timer when the time data is > 0", () => {
  render(<Walkthrough walkthrough={[
    { description: "Boil the water", time: 0},
    { description: "Add the teabag", time: 10}
  ]}/>);
  const nextStepButton = screen.getByText('Next Step')
  
  nextStepButton.click();
  const startButton = screen.getByText('Start')
  expect(startButton).toBeInTheDocument()
  
});
it('should display Start value of the timer',() => {
  render(<Walkthrough walkthrough={[
    { description: "Add the teabag", time: 10}
  ]}/>);
  const startTime = screen.getByText('10');
  expect(startTime).toBeInTheDocument();
});
// it('finds start button and when clicked, changes the default state to true', () => {
//   render(<Walkthrough walkthrough={[
//     { description: "Add the teabag", time: 10}
//   ]}/>);
//   const timerBoolean = (<Walkthrough state={
//      { start: false }
//   }/>);
//   console.log(timerBoolean);
//   const startButton1 = screen.getByText('Start');
//   startButton1.click();
//   console.log(timerBoolean)
//   expect(timerBoolean).toHaveValue(true)
// });