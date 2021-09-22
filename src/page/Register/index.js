import { Container,  Section, Form } from './styled';
import logoImg from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export default function Register() {
    return(
        <Container>
            <div>
                <Section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link to="/">
                        <FiArrowLeft />
                        Voltar
                    </Link>
                </Section>

                <Form>
                    <input type="text" placeholder='Nome da ONG' />
                    <input type='email' placeholder='E-mail' />
                    <input type="number" placeholder='WhatsApp' />

                    <header>
                        <input type="text" placeholder='Cidade' />
                        <input placeholder='UF' style={{ width: 80 }} />
                    </header>

                    <button type='submit'>Cadastrar</button>
                </Form>
            </div>
        </Container>
    );
}
