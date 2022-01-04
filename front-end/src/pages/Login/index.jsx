import React, { useState } from 'react';
import rockGlass from '../../images/rockGlass.svg';

const MIN_PASSWORD = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authorized, setAuthorized] = useState(true);

  const validLogin = () => {
    const regexEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
    const isValidEmail = regexEmail.test(email);

    setAuthorized(!(isValidEmail && password.length > MIN_PASSWORD));
  };

  const changeEmail = ({ target }) => {
    setEmail(target.value);
    validLogin();
  };

  const changePassword = ({ target }) => {
    setPassword(target.value);
    validLogin();
  };

  return (
    <div>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <h4>Boteco do seu Raimundo</h4>
      <form action="/login" method="POST">
        <input
          placeholder="email@seuZeh.com.br"
          type="text"
          value={ email }
          name="email"
          data-testid="common_login__input-email"
          onChange={ changeEmail }
        />
        <input
          placeholder="******"
          type="password"
          value={ password }
          name="password"
          data-testid="common_login__input-password"
          onChange={ changePassword }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ authorized }
          onClick={ validLogin }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
        <button
          type="button"
          onClick={ () => {
            setPassword('1234566');
            setEmail('le@gmail.com');
            validLogin();
          } }
        >
          dev
        </button>
      </form>
    </div>
  );
}

export default Login;
