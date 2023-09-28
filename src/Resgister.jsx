import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';






function Register(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Access the form data here
        const { name, email, password } = formData;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        // You can send the data to your backend or perform any other necessary actions
      };




    return(
        <Container className='my-5'>
            <Form  onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control className='false'
                        type="text"
                        placeholder="Enter name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {/* <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text> */}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
        </Container>
    );

}

export default Register;

