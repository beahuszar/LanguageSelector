import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  // as no multiple contexts are handled here
  // can be accessed through this.context
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
        <i className="flag hu" onClick={() => this.context.onLanguageChange('hungarian')} />
      </div>
    );
  }
}

export default LanguageSelector;
