import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
  renderSubmitText(language) {
    return language === 'english' ? 'Submit' : 'Elkuld'
  };

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {/** This function will be called by Consumer with the value inside the Pipe */}
          {({ language }) => this.renderSubmitText(language)}
        </LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      // Consumer components must always have a function as a child
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
