import { useState } from 'react';
import { connect } from 'react-redux';
import {
  Input,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  UncontrolledAccordion,
  AccordionItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';
import { Scrollbars } from 'react-custom-scrollbars';
import Device from './Device';
import { postDevice, deleteDevice } from '../actions/devices';

function HomePage({ devices, postDevice, deleteDevice }) {
  // State
  const [inputs, setInputs] = useState({
    host: '',
    sshUsername: '',
    sshPassword: '',
    sshPort: 22,
    os: 'Windows',
    description: '',
  });
  const [modal, setModal] = useState(false);

  // Toggle functions
  const toggleModal = () => setModal(!modal);

  // onChange functions
  const onInputsChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });

  // onClick functions
  const onSaveClick = e => {
    e.preventDefault();

    postDevice({
      host: inputs.host,
      sshUsername: inputs.sshUsername,
      sshPassword: inputs.sshPassword,
      sshPort: inputs.sshPort,
      os: inputs.os,
      description: inputs.description,
    });
    toggleModal();
  };

  // JSX
  return (
    <>
      <h2>Remote Machine Access</h2>
      <hr />

      <Button color='primary' onClick={toggleModal}>
        Add device
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Add a new device</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
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
                  <Label>OS</Label>
                  <Input type='select' name='os' value={inputs.os} onChange={onInputsChange} placeholder='OS'>
                    <option>Linux</option>
                    <option>Windows</option>
                    <option>OSX</option>
                  </Input>
                </FormGroup>
              </Col>

              <Col md={4}>
                <FormGroup>
                  <Label>SSH Username</Label>
                  <Input
                    required
                    type='text'
                    name='sshUsername'
                    value={inputs.sshUsername}
                    onChange={onInputsChange}
                    placeholder='SSH Username'
                  />
                </FormGroup>
              </Col>

              <Col md={4}>
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

              <Col md={4}>
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
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button type='submit' onClick={onSaveClick} color='primary'>
            Save
          </Button>
        </ModalFooter>
      </Modal>

      <hr />

      <div>
        <Scrollbars style={{ height: 'calc(100vh - 36.63px - 8px - 40px - 38px - 2px - 64px)' }}>
          <UncontrolledAccordion defaultOpen='1'>
            {devices.map(device => (
              <AccordionItem key={device._id}>
                <Device device={device} deleteDevice={deleteDevice} />
              </AccordionItem>
            ))}
          </UncontrolledAccordion>
        </Scrollbars>
      </div>
    </>
  );
}

const mapStateToProps = state => ({ message: state.message, devices: state.devices.devices });

export default connect(mapStateToProps, { postDevice, deleteDevice })(HomePage);
