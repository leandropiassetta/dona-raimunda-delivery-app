import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { loginUser } from '../../api/user';
import rockGlass from '../../images/rockGlass.svg';
import { Base, Form, LoginBtn, Input, RegisterBtn, Alert } from '../../styles';

function Login() {
  // States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  // Utils
  const MIN_PASSWORD = 6;
  const regexEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  const history = useNavigate();

  // Functions
  const changeEmail = ({ target }) => setEmail(target.value);
  const changePassword = ({ target }) => setPassword(target.value);
  const loginInfo = async () => {
    const userData = await loginUser({ email, password });
    if (userData.error) return setAlert(userData.error);
    localStorage.setItem('user', JSON.stringify(userData.data));
    history('/customer/products');
  };

  return (
    <Base>
      <object className="w-48" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      <Form>
        {
          alert && (
            <Alert data-testid="common_login__element-invalid-email">{ alert }</Alert>
          )
        }
        <Input
          placeholder="email@seuZeh.com.br"
          type="text"
          value={ email }
          data-testid="common_login__input-email"
          onChange={ changeEmail }
        />
        <Input
          placeholder="******"
          type="password"
          value={ password }
          data-testid="common_login__input-password"
          onChange={ changePassword }
        />
        <button
          type="button"
          onClick={ () => {
            setPassword('1234567');
            setEmail('teste@teste.com');
          } }
        >
          Esqueceu a senha?
        </button>
        <LoginBtn
          type="button"
          data-testid="common_login__button-login"
          disabled={ !(regexEmail.test(email) && password.length >= MIN_PASSWORD) }
          onClick={ () => loginInfo() }
        >
          LOGIN
        </LoginBtn>
        <RegisterBtn
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history('/register') }
        >
          Ainda não tenho conta
        </RegisterBtn>
      </Form>
    </Base>
  );
}

export default Login;
