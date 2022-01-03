import React from 'react';
import rockGlass from '../../images/rockGlass.svg';

function Login() {
  return (
    <div>
      <object className="rocksGlass" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <h4>Boteco do seu Raimundo</h4>
      <form action="">
        <input
          placeholder="email@seuZeh.com.br"
          type="text"
          data-testid="common_login__input-email"
        />
        <input
          placeholder="**********"
          type="text"
          data-testid="common_login__input-password"
        />
        <button
          type="button"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;
