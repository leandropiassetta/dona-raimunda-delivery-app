import React, { useState } from 'react';
import rockGlass from '../../images/rockGlass.svg';
import { Base, Form, LoginBtn, Input, RegisterBtn } from './style';

const MIN_PASSWORD = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [authorized, setAuthorized] = useState(true);
  const regexEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  // const validLogin = () => {
  //   const regexEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  //   const isValidEmail = () => regexEmail.test(email);
  //   setAuthorized(!(isValidEmail && password.length > MIN_PASSWORD));
  // };

  const changeEmail = ({ target }) => {
    setEmail(target.value);
    // validLogin();
  };

  const changePassword = ({ target }) => {
    setPassword(target.value);
    // validLogin();
  };

  return (
    <Base>
      <object className="w-48" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <Form
        action="/login"
        method="POST"
      >
        <Input
          placeholder="email@seuZeh.com.br"
          type="text"
          value={ email }
          name="email"
          data-testid="common_login__input-email"
          onChange={ changeEmail }
        />
        <Input
          placeholder="******"
          type="password"
          value={ password }
          name="password"
          data-testid="common_login__input-password"
          onChange={ changePassword }
        />
        <button
          type="button"
          onClick={ () => {
            setPassword('1234567');
            setEmail('le@gmail.com');
          } }
        >
          Esqueceu a senha?
        </button>
        <LoginBtn
          type="button"
          data-testid="common_login__button-login"
          // disabled={ authorized }
          disabled={ !(regexEmail.test(email) && password.length >= MIN_PASSWORD) }
        >
          LOGIN
        </LoginBtn>
        <RegisterBtn
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </RegisterBtn>
      </Form>
    </Base>
  );
}

export default Login;
