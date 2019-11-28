import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
  // specific naming for context system
  static contextType = LanguageContext;

  render() {
    return <button className="ui button primary">Submit</button>;
  }
}

export default Button;
