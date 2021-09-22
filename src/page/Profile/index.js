import { Container, Header, List } from './styled';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

export default function Profile() {
    return(
        <Container>
            <Header>
                <img src={logoImg} alt='Be The Hero' />
                <span>Bem vindo(a), APAD</span>

                <Link to='/incidents/new'>Cadastrar novo caso</Link>

                <button type='submit'>
                    <FiPower />
                </button>
            </Header>

            <h1>Casos Cadastrados</h1>

            <List>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso teste</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição teste</p>

                    <strong>VALOR:</strong>
                    <p>R$ 120,00</p>

                    <button type='button'>
                        <FiTrash2 />
                    </button>
                </li>
            </List>
        </Container>
    );
}