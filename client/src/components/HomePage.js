import { useState } from 'react';
import { connect } from 'react-redux';
import { Input, Form, FormGroup, Label, Row, Col, Button, UncontrolledAccordion, AccordionItem } from 'reactstrap';
import Device from './Device';
import { postDevice, putDevice, deleteDevice } from '../actions/devices';

function HomePage({ devices }) {
  // State
  const [inputs, setInputs] = useState({ host: '', sshPassword: '', sshPort: 22, os: 'Windows', description: '' });

  // onChange functions
  const onInputsChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });

  // onClick functions
  const onSaveClick = e => {
    e.preventDefault();

    postDevice({
      host: inputs.host,
      sshPassword: inputs.sshPassword,
      sshPort: inputs.sshPort,
      os: inputs.os,
      description: inputs.description,
    });
  };

  // JSX
  return (
    <>
      <Form>
        <Row>
          <Col md={12}>
            <h2>Remote Machine Access</h2>
            <hr />
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label>Host</Label>
              <Input
                required
                type='text'
                name='host'
                value={inputs.host}
                onChange={onInputsChange}
                placeholder='Host'
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label>SSH Password</Label>
              <Input
                required
                type='password'
                name='sshPassword'
                value={inputs.sshPassword}
                onChange={onInputsChange}
                placeholder='SSH Password'
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label>SSH Port</Label>
              <Input
                type='number'
                name='sshPort'
                value={inputs.sshPort}
                onChange={onInputsChange}
                placeholder='SSH Port'
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label>OS</Label>
              <Input type='select' name='os' value={inputs.os} onChange={onInputsChange} placeholder='OS'>
                <option>Linux</option>
                <option>Windows</option>
                <option>OSX</option>
              </Input>
            </FormGroup>
          </Col>

          <Col md={12}>
            <FormGroup>
              <Label>Description</Label>
              <Input
                type='textarea'
                name='description'
                value={inputs.description}
                onChange={onInputsChange}
                placeholder='Description'
              />
            </FormGroup>
          </Col>

          <Col md={12}>
            <Button type='submit' onClick={onSaveClick} color='primary'>
              Save
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />

      <div>
        <UncontrolledAccordion defaultOpen='1'>
          {devices.map((device, index) => (
            <AccordionItem key={index}>
              <Device device={device} index={index} />
            </AccordionItem>
          ))}
        </UncontrolledAccordion>
      </div>
    </>
  );
}

const mapStateToProps = state => ({ message: state.message, devices: state.devices.devices });

export default connect(mapStateToProps, { postDevice, putDevice, deleteDevice })(HomePage);
