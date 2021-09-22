import { Container, Section, Form } from './styled';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function NewIncident() {
    return (
        <Container>
            <div>
                <Section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro novo caso</h1>
                    <p>Descreve o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link to="/profile">
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </Section>

                <Form>
                    <input type="text" placeholder='Título do caso' />
                    <textarea placeholder='Descrição' />
                    <input type="text" placeholder='Valor em reais' />

                    <button type='submit'>Cadastrar</button>
                </Form>
            </div>
        </Container>
    );
}