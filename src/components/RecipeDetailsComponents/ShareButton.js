import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import clipboardCopy from 'clipboard-copy';
import { IconButton, Tooltip } from '@mui/material';
import shareIcon from '../../images/shareIcon.svg';
import RecipesContext from '../../context/RecipesContext';

function ShareButton() {
  const [copied, setCopied] = useState(false);

  const { isFood } = useContext(RecipesContext);

  const { id } = useParams();

  const clickShare = () => {
    const INTERVAL_TIME = 3000;
    if (isFood) {
      clipboardCopy(`https://tayna-silva-macedo.github.io/project-recipes-app/#/foods/${id}`);
    } else {
      clipboardCopy(`https://tayna-silva-macedo.github.io/project-recipes-app/#/drinks/${id}`);
    }
    setCopied(true);
    setInterval(() => setCopied(false), INTERVAL_TIME);
  };

  return (
    <Tooltip
      title="Link copied!"
      open={ copied }
      placement="left"
      arrow
    >
      <IconButton aria-label="share" onClick={ clickShare }>
        <img
          src={ shareIcon }
          alt="compartilhar"
          data-testid="share-btn"
        />
      </IconButton>
    </Tooltip>
  );
}

export default ShareButton;
