import React, { useState } from 'react';
import Header from '../../components/headerSemLogin';
import { Container, Row, Col, Button } from 'react-bootstrap'
import Axios from '../../services/axios';
import { Redirect } from 'react-router-dom';
// import { Container } from './styles';

export default function Login() {

  const [redirecionar, setredirecionar] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  let Logar = async () => {
    if (email !== '' && senha !== '') {
      await Axios.post('/auth/login', { email: email, senha: senha }).then((response) => {
        let RetornoApi = response.data;
        if (RetornoApi != null) {
          RetornoApi.user.tipo_usuario = undefined;
          localStorage.setItem('usuario', JSON.stringify(RetornoApi.user));
          localStorage.setItem('token', RetornoApi.token);
          setredirecionar(true);
        }
      }).catch((error) => {
        console.log(error);
      }).then(response => {
        //Tem que ter esse para ele funcinar bele!!!
      });

    }
  };

  if (redirecionar){
    debugger
    return (<Redirect to='/'></Redirect>)
  }
  else
    return (
      <>
        <Header />
        <Container>
          <Row className={['text-center', 'mt-5', 'justify-content-md-center']}>
            <Col xs={6}>
              <div className="box" style={{ color: '#ffffff' }}>
                <h1>Login</h1>
                <div className={["box-inline"]} style={{ marginBottom: 5 }}>
                  <input value={email} onChange={input => { setEmail(input.target.value) }} type='email' placeholder="email"></input>
                </div>
                <div className="box-inline" style={{ marginBottom: 5 }}>
                  <input type='password' value={senha} onChange={input => setSenha(input.target.value)} placeholder="Senha"></input>
                </div>
                <Button variant='dark' onClick={() => { Logar() }}>Log-in</Button>
              </div>
            </Col>

          </Row>
        </Container>
      </>
    );

}

