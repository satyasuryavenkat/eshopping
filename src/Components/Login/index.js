import React, { useRef, useState } from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();

    try {
        setError('')
      setLoading(true);
      // await login(emailRef.current.value, passwordRef.current.value)
      // history.push("/")
    }
    catch
    {
      setError('failed to login')
    }
    setLoading(false);
  }
  
  
  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger" style={{textAlign:'center'}}>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <br></br>
            <Button className="w-100" type="submit" disabled={loading} >
              Sign in
            </Button>
            <div className="w-100 text-center mt-2">
        Forgot Password? 
      </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Create a account? Sign Up
      </div>
    </>
  );

}