import React, { useState } from 'react';
import fondo from '../Fondo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Button, Form, FormGroup, Container, Card, CardBody, FormFeedback, Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
function Registro() {
    const [formData, setFormData] = useState({
        firstName: '',
        firstLastName: '',
        documentNumber: '',
        password: '',
        confirmPassword: '',
        email: ''
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let formErrors = {};
        let valid = true;

        if (!formData.firstName) {
            formErrors.firstName = "El nombre es requerido.";
            valid = false;
        }
        if (!formData.firstLastName) {
            formErrors.firstLastName = "El apellido es requerido.";
            valid = false;
        }
        if (!formData.documentNumber) {
            formErrors.documentNumber = "El número de documento es requerido.";
            valid = false;
        }
        if (!formData.password) {
            formErrors.password = "La contraseña es requerida.";
            valid = false;
        }
        if (formData.password !== formData.confirmPassword) {
            formErrors.confirmPassword = "Las contraseñas no coinciden.";
            valid = false;
        }
        if (!formData.email) {
            formErrors.email = "El correo electrónico es requerido.";
            valid = false;
        }

        setErrors(formErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const user = {
                nombre: formData.firstName,
                apellido: formData.firstLastName,
                identificacion: formData.documentNumber,
                email: formData.email,
                password: formData.password,
            };

            try {
                const response = await axios.post('http://localhost:8080/api/user/register', user, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            
                const { status, message } = response.data; 

               
                if (response.data.status === 200 || response.data.status === 201) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Registro exitoso',
                        text: message || 'El usuario ha sido registrado correctamente.',
                        confirmButtonText: 'Aceptar'
                    }).then(() => {
                        navigate("/"); 
                    });
                }
                if(response.data.status === 400){
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en el registro',
                        text: message || 'No se pudo registrar el usuario, por favor inténtalo nuevamente.',
                        confirmButtonText: 'Aceptar'
                    })
                }
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error en el registro',
                    text: error.response?.data?.message || 'No se pudo registrar el usuario, por favor inténtalo nuevamente.',
                    confirmButtonText: 'Aceptar'
                });
            }
        }
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
            width: '100%',
            maxWidth: '600px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
        },
        form: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '15px',
        },
        button: {
            gridColumn: '1 / -1',
            padding: '10px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#218838',
        },
        link: {
            color: '#28a745',
            textDecoration: 'none',
        },
        title: {
            color: '#06652d',
            textDecoration: 'none',
        },
        errorText: {
            color: 'red',
            fontSize: '12px',
        },
    };

    return (
        <div className="registro-page" style={styles.page}>
            <Container style={styles.container}>
                <Card style={styles.card}>
                    <CardBody>
                        <h2 style={styles.title}>Registra tus datos</h2>
                        <p>Importante: Debes ingresar tus datos exactamente como se muestran en tu documento de identidad.</p>
                        <Form onSubmit={handleSubmit} style={styles.form}>
                            <FormGroup>
                                <Input
                                    type="text"
                                    className="form-control mt-3"
                                    name="firstName"
                                    placeholder="Nombre"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    invalid={!!errors.firstName}
                                />
                                <FormFeedback>{errors.firstName}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="text"
                                    className="form-control mt-3"
                                    name="firstLastName"
                                    placeholder="Apellido"
                                    value={formData.firstLastName}
                                    onChange={handleChange}
                                    invalid={!!errors.firstLastName}
                                />
                                <FormFeedback>{errors.firstLastName}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="text"
                                    className="form-control mt-3"
                                    name="documentNumber"
                                    placeholder="Número de documento"
                                    value={formData.documentNumber}
                                    onChange={handleChange}
                                    invalid={!!errors.documentNumber}
                                />
                                <FormFeedback>{errors.documentNumber}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="password"
                                    className="form-control mt-3"
                                    name="password"
                                    placeholder="Contraseña"
                                    value={formData.password}
                                    onChange={handleChange}
                                    invalid={!!errors.password}
                                />
                                <FormFeedback>{errors.password}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="password"
                                    className="form-control mt-3"
                                    name="confirmPassword"
                                    placeholder="Confirmar contraseña"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    invalid={!!errors.confirmPassword}
                                />
                                <FormFeedback>{errors.confirmPassword}</FormFeedback>
                            </FormGroup>

                            <FormGroup>
                                <Input
                                    type="email"
                                    className="form-control mt-3"
                                    name="email"
                                    placeholder="Correo electrónico"
                                    value={formData.email}
                                    onChange={handleChange}
                                    invalid={!!errors.email}
                                />
                                <FormFeedback>{errors.email}</FormFeedback>
                            </FormGroup>

                            <Button type="submit" color="success">Registrar</Button>
                        </Form>
                        <div className="mt-3">
                            <a href="/" style={{ ...styles.link, display: 'block' }}>Regresar</a>
                        </div>
                    </CardBody>
                </Card>
            </Container>
        </div>
    );
}

export default Registro;
