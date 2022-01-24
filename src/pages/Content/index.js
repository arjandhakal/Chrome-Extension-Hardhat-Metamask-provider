import React from 'react';
import { render } from 'react-dom';

import MintButtonContainer from '../../containers/MintButtonContainer/MintButtonContainer';

const images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++) {
  let app = document.createElement('div');
  app.id = `nft-button${i}`;

  let currentImage = images[i];

  currentImage.parentNode.insertBefore(app, currentImage.nextSibling);

  render(<MintButtonContainer imageData={currentImage} />, app);
}
