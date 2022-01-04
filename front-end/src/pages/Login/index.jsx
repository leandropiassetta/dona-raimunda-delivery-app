import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosAPI from '../../api/request';
import rockGlass from '../../images/rockGlass.svg';
import { Base, Form, LoginBtn, Input, RegisterBtn, Alert } from '../../styles/style';

const MIN_PASSWORD = 6;
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const history = useNavigate();
  const regexEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;

  const changeEmail = ({ target }) => {
    setEmail(target.value);
  };

  const changePassword = ({ target }) => {
    setPassword(target.value);
  };

  const loginInfo = async () => {
    try {
      await axiosAPI.post('/login', { email, password });
      history('/customer/products');
    } catch (error) {
      console.log(Object.keys(error));
      console.log(error.response);
      setAlert(error.response.data.message);
    }
  };

  return (
    <Base>
      <object className="w-48" type="image/svg+xml" data={ rockGlass }>
        Glass
      </object>
      {
        alert && (
          <Alert data-testid="common_login__element-invalid-email">{ alert }</Alert>
        )
      }
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
