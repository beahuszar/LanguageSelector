import React from 'react';
import LanguageContext from '../contexts/LanguageContext'

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const name = this.context === 'english' ? 'Name' : 'Nev';
    return (
      <div className="ui field">
        <label>{name}</label>
        <input />
      </div>
    );
  }
}

export default Field;
