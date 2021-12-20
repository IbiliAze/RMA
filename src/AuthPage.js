import { useState } from 'react';
import { Input, Form, FormGroup, Label, Row, Col, Button } from 'reactstrap';

function AuthPage() {
  // State
  const [authType, setAuthType] = useState('Login');
  const [inputs, setInputs] = useState({ username: '', password: '' });

  // onChange functions
  const onAuthTypeChange = e => setAuthType(e.target.value);
  const onInputsChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });

  // onClick functions
  const onLoginClick = e => e.preventDefault();

  // JSX
  return (
    <Form>
      <Row>
        <Col md={12}>
          <h2>Remote Machine Access</h2>
          <hr />
        </Col>

        <Col md={12}>
          <FormGroup>
            <Input type='select' value={authType} onChange={onAuthTypeChange}>
              <option>Login</option>
              <option>Register</option>
            </Input>
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label>Username</Label>
            <Input
              type='text'
              name='username'
              value={inputs.username}
              onChange={onInputsChange}
              placeholder='Username'
            />
          </FormGroup>
        </Col>

        <Col md={6}>
          <FormGroup>
            <Label>Password</Label>
            <Input
              type='password'
              name='password'
              value={inputs.password}
              onChange={onInputsChange}
              placeholder='Password'
            />
          </FormGroup>
        </Col>

        <Col md={12}>
          <Button onClick={onLoginClick} color='primary'>
            {authType === 'Login' ? 'Login' : 'Register'}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default AuthPage;
