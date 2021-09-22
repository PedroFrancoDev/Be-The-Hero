import { Container } from './styled';
import heroesimage from '../../assets/heroes.png';
import heroeslogo from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Login() {
    return(
        <Container>
           <section>
                <img src={heroeslogo} alt="Be The Hero" />

                <form>
                    <h1>Faça seu logon</h1>

                    <input type="text" placeholder='Sua ID' />
                    <button type='submit'>Entrar</button>
                    <Link to="/register">
                        <FiLogIn />
                        Não tenho cadastro
                    </Link>
                </form>
           </section>
           
           <img src={heroesimage} alt='heroes' />
        </Container>
    );
}