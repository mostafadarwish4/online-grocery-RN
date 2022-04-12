import React, { useState, useEffect } from 'react';
import store from './src/store/index'
import {Provider} from 'react-redux'
import Navigation from './src/routes/main'
function App() {
  
  return (
      <Provider store={store}>
        <Navigation/>
      </Provider>
     

  );
}

export default App;
