import { render, screen } from '@testing-library/react';
import React from 'react';
import RecipeItem from '../components/RecipeItem.js';


it("should show a clickable hide button after a recipe is clicked", () => {
    const mockHideButton = ("Hide")
    render(<RecipeItem recipeProp={mockHideButton}/>)
    const button = screen.getByRole('button');
    button.click();
    const hideButton = screen.getAllByRole('button');
    expect(hideButton).toHaveLength(1);


});
