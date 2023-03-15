import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Title, Wrapper, Column, Row, SubTitleLogin, TitleLogin, CriarText, EsqueciText } from './styles'


const Login = () => {

    const navigate = useNavigate()

    const handleClickSignIn = () => {
        navigate('/feed')
    }

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>
                        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas
                    </Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleLogin>Faça seu cadastro</TitleLogin>
                        <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
                        <form>
                            <Input placeholder="E-mail" />
                            <Input placeholder="Senha" type="passoword" />
                            <Button title="Entrar" variant='secondary' onClick={handleClickSignIn} type="button"></Button>
                        </form>
                        <Row>
                            <EsqueciText>Esqueci minha senha</EsqueciText>
                            <CriarText>Criar Conta</CriarText>
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    )
}

export { Login }