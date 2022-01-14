import React from 'react';

function Form() {
  return (
    <form action="">
      CADASTRAR NOVO USUÁRIO
      <div>
        <h4>Nome</h4>
        <input
          id="name"
          type="text"
          placeholder="Nome e sobrenome"
          name="name"
          data-testid="common_register__input-name"
        />
      </div>
      <div>
        <h4>Email</h4>
        <input
          id="email"
          type="email"
          placeholder="Type your e-mail here"
          name="email"
          data-testid="common_register__input-email"
        />
      </div>
      <div>
        <h4>Senha</h4>
        <input
          id="password"
          type="password"
          placeholder="Type your password here"
          name="password"
          data-testid="common_register__input-password"
        />
      </div>
      <div>
        <h4>Tipo</h4>
        <select
          name="tipo"
          id="tipo"
          data-testid="admin_manage__select-role"
        >
          <option value="cliente">Cliente</option>
          <option value="vendedor">Vendedor</option>
          <option value="administrador">Administrador</option>
        </select>
      </div>
      <button
        type="button"
        disabled="true"
        datatest-id="admin_manage__button-register"
      >
        CADASTRAR
      </button>
    </form>
  );
}

export default Form;
