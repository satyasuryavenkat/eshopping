import React, { useRef, useState } from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { Container } from 'react-bootstrap';
export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {

    e.preventDefault();
    console.log('in submit')
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('passwords do not match')
    }

    try {
      setLoading(true);
    //   await signup(emailRef.current.value, passwordRef.current.value)
    //   history.push("/")
    }
    catch
    {
      setError('failed to create an account')
    }
    setLoading(false);
  }

  return (
    <>
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            <br></br>
            <Button className="w-100" type="submit" disabled={loading} >
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/signin" style={{ textDecoration: 'none' }}>Sign In</Link>
      </div>
      </div>
      </Container>
    </>
  );

}