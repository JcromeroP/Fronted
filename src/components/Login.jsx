import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logoCorhuila from '../logoCorhuila.jpg';
import fondo from '../Fondo.png';
import { Button, Form, FormGroup, Container, Card, CardBody, FormFeedback, Input } from 'reactstrap';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({ username: '', password: '' });

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = { username: '', password: '' };

    // Validación del nombre de usuario
    if (!username) {
      formIsValid = false;
      newErrors.username = 'El nombre de usuario es requerido.';
    }

    // Validación de la contraseña
    if (!password) {
      formIsValid = false;
      newErrors.password = 'La contraseña es requerida.';
    } else if (password.length < 6) {
      formIsValid = false;
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Usuario:', username, 'Contraseña:', password);
      // Aquí puedes redirigir al usuario o realizar otra acción
    }
    setValidated(true);
  };

  return (
    <div className="login-page" style={styles.page}>
      <Container style={styles.container}>
        <Card style={styles.card}>
          <CardBody>
            <div style={styles.logoContainer}>
              <img className='logo-login' src={logoCorhuila} alt="CORHUILA Logo" />
            </div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <FormGroup>
                <Input 
                  type="email" 
                  className="form-control mt-3" 
                  id="username" 
                  placeholder="Nombre de usuario o correo electrónico" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  invalid={!!errors.username}
                />
                <FormFeedback>{errors.username}</FormFeedback>
              </FormGroup>
              <FormGroup>
                <Input 
                  type="password" 
                  className="form-control mt-3" 
                  id="inputPassword" 
                  placeholder="Contraseña" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  invalid={!!errors.password}
                />
                <FormFeedback>{errors.password}</FormFeedback>
              </FormGroup>
              <Button  type="submit" color="success">
                Acceder
              </Button>
              <div className="mt-3">
                <a href="/forgot-password" style={styles.link}>
                  ¿Olvidó su contraseña?
                </a>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </div>
  );
};

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    backgroundImage: `url(${fondo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  card: {
    width: '380px',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.1)',
  },
  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  link: {
    color: '#28a745',
    textDecoration: 'none',
  },
};

export default Login;