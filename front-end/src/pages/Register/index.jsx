import React, { useState } from 'react';
import { Base, Form, LoginBtn, Input, Alert } from '../../styles/style';

const MIN_PASSWORD = 6;
const MIN_NAME = 12;

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const regexEmail = /^[\w.]+@[a-z]+\.\w{2,3}$/g;
  const changeEmail = ({ target }) => setEmail(target.value);
  const changePassword = ({ target }) => setPassword(target.value);
  const changeName = ({ target }) => setName(target.value);
  const registerInfo = () => {
    setAlert('Teste');
  };
  return (
    <Base>
      <Form>
        {
          alert && (
            <Alert
              data-testid="common_register__element-invalid_register"
            >
              { alert }
            </Alert>
          )
        }
        <Input
          placeholder="Seu nome"
          type="text"
          value={ name }
          data-testid="common_register__input-name"
          onChange={ changeName }
        />
        <Input
          placeholder="email@seuZeh.com.br"
          type="text"
          value={ email }
          data-testid="common_register__input-email"
          onChange={ changeEmail }
        />
        <Input
          placeholder="******"
          type="password"
          value={ password }
          data-testid="common_register__input-password"
          onChange={ changePassword }
        />
        <button
          type="button"
          onClick={ () => {
            setName('Teste');
            setPassword('1234567');
            setEmail('teste@gmail.com');
          } }
        >
          Teste
        </button>
        <LoginBtn
          type="button"
          data-testid="common_register__button-register"
          disabled={ !(regexEmail.test(email)
            && password.length >= MIN_PASSWORD
            && name.length >= MIN_NAME) }
          onClick={ () => registerInfo() }
        >
          Cadastrar
        </LoginBtn>
      </Form>
    </Base>
  );
}

export default Register;
