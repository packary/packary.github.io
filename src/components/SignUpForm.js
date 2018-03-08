import React from 'react';
import T from 'prop-types';
import './styles/sign-up-form.scss';

const SignUpForm = ({buttonModifier, align}) => (
  <div className={`sign-up-form sign-up-form--${align}`}>
    <p className="sign-up-form__p">Register for early access now!</p>
    <form className={`sign-up-form__form sign-up-form__form--${align}`}>
      <div className="sign-up-form__form__email">
        <i className="icon-mail"/>
        <input className="sign-up-form__form__email__input" name="email" type="email" placeholder="Email address"/>
      </div>
      <input
        className={`sign-up-form__form__submit sign-up-form__form__submit--${buttonModifier}`}
        type="submit"
        value="Sign Me Up!"
      />
    </form>
  </div>
);

SignUpForm.propTypes = {
  buttonModifier: T.oneOf(['dark', 'light']),
  align: T.oneOf(['left', 'right'])
};

SignUpForm.defaultProps = {
  buttonModifier: 'dark',
  align: 'left',
};

export default SignUpForm;