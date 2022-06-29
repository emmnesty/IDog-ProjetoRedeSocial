import './Cadastro.css';
import img from '../assets/cat.png';

const Cadastro = (props) => {
  return (
    <main>
      <div className='Content'>
        <h2>Bem vindo</h2>
        <label htmlFor='Usuario'>Nome de Usuário</label>
        <input type='text' placeholder='Nome Completo' />
        <label htmlFor='Email'>Email</label>
        <input type='email' placeholder='email@exemplo.com.br' />
        <label htmlFor='Telefone'>Telefone</label>
        <input type='tel' placeholder='(xx) xxxxx-xxxxx' />
        <label htmlFor='DataNascimento'>Data de nascimento</label>
        <input type='date' placeholder='dd/MM/aaaa' />
        <label htmlFor='Senha'>Senha</label>
        <input type='password' placeholder='Digite sua senha' />
        <label htmlFor='Senha'>Confirmar senha</label>
        <input type='password' placeholder='Confirmar sua senha' />
        <div>
          <input
            className='CheckBox'
            type='checkbox'
            name='checkbox'
            value='Termos'
          ></input>
          <span>Eu aceito os</span> <a href='Termos'>termos de serviço</a>
        </div>

        <button className='btn-login'>Cadastre-se</button>
      </div>

      <div className='Container'>
        <img src={img} alt='Imagem do Gatinho' className='img-gatinho' />
      </div>
    </main>
  );
};

export default Cadastro;
