import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  // specific naming for context system
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : 'Elkuld'
    return <button className="ui button primary">{text}</button>;
  }
}

export default Button;
