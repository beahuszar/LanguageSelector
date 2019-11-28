import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  renderSubmitText(value) {
    return value === 'english' ? 'Submit' : 'Elkuld'
  };

  render() {
    return (
      <button className="ui button primary">
        <LanguageContext.Consumer>
          {/** This function will be called by Consumer with the value inside the Pipe */}
          {(value) => this.renderSubmitText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  }
}

export default Button;
