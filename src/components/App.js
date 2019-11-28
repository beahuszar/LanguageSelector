import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContect from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector'

class App extends React.Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          {/* value: specific propName for the provider */}
          <ColorContect.Provider value="red">
            <UserCreate />
          </ColorContect.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
