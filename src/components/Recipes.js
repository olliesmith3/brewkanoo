import React, { Component } from 'react';
import RecipeItem from './RecipeItem';
import PropTypes from 'prop-types';


class Recipes extends Component {
  render() {
    return this.props.recipes.map((recipe) => (
      <RecipeItem key={recipe.id} recipe={recipe} />
    ));
  };
};

//PropTypes
Recipes.propTypes = {
  recipes: PropTypes.array.isRequired
}

export default Recipes;