import {
  Button,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';
import React, { useState, useContext } from 'react';
import RecipesContext from '../context/RecipesContext';

function SearchBar() {
  const [searchInput, setSearchInput] = useState('');
  const [typeOfSearch, setTypeOfSearch] = useState('ingredient');

  const { setSearch } = useContext(RecipesContext);

  const handleSearchButton = () => {
    if (typeOfSearch === 'first-letter' && searchInput.length > 1) {
      global.alert('Your search must have only 1 (one) character');
    } else {
      setSearch({
        text: searchInput,
        option: typeOfSearch,
      });
      setSearchInput('');
      setTypeOfSearch('ingredient');
    }
  };

  return (
    <Grid
      container
      spacing={ 1 }
      justifyContent="center"
      sx={ { width: '360px', margin: 'auto' } }
    >
      <Grid item>
        <Grid container spacing={ 1 }>
          <Grid item>
            <TextField
              size="small"
              variant="outlined"
              data-testid="search-input"
              value={ searchInput }
              label="Type your search"
              onChange={ ({ target }) => setSearchInput(target.value) }
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={ handleSearchButton }
              data-testid="exec-search-btn"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ToggleButtonGroup
          color="primary"
          size="small"
          value={ typeOfSearch }
          exclusive
          onChange={ ({ target }) => setTypeOfSearch(target.value) }
        >
          <ToggleButton
            value="ingredient"
            checked={ typeOfSearch === 'ingredient' }
            data-testid="ingredient-search-radio"
          >
            Ingredient
          </ToggleButton>
          <ToggleButton
            value="name"
            checked={ typeOfSearch === 'name' }
            data-testid="name-search-radio"
          >
            Name
          </ToggleButton>
          <ToggleButton
            value="first-letter"
            checked={ typeOfSearch === 'first-letter' }
            data-testid="first-letter-search-radio"
          >
            First Letter
          </ToggleButton>
        </ToggleButtonGroup>
      </Grid>
    </Grid>
  );
}

export default SearchBar;
