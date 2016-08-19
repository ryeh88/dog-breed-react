require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import DogList from '../containers/dog-list';
import DogDetail from '../containers/dog-detail';

const App = () =>
    (
      <div className="index">
        <h2>Dog List:</h2>
        <hr />
        <DogList />
        <h2>Dog Details:</h2>
        <DogDetail />
      </div>
    );

export default App;




