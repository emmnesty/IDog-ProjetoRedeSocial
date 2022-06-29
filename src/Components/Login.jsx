import React from 'react';
import './Login.css';
import img from '../assets/dog.png';

const Login = props => {
  return (
    <main>
      <div className='Container'>
          <div>
            <img className='img-logo' src={img} alt="img" />
            
          </div>
      </div>

      <div className='Content'>
        <div className='Form'>
          <h2>Bem vindo</h2>
          <h3>Login</h3>
          <span>Você ainda não tem cadastro?</span>{' '}
          <a href='Registre'>Registre-se</a>
          <input className='inputCadastro' type='email' placeholder='Nome de usuário ou email' />
          <input className='inputCadastro' type='password' placeholder='Insira sua senha' />
          <h4 className='perdeuSenha'>Perdeu sua senha?</h4>
          <input className='CheckBox' type='checkbox' name='checkbox' value='Termos'></input>
          <span>Eu aceito os termos de serviço</span>

          <button className='btn-login'>
            Login
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login;
