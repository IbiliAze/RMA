import { useState } from 'react';
import {
  Input,
  Form,
  FormGroup,
  Label,
  Row,
  Col,
  Button,
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'reactstrap';

function HomePage() {
  // State
  const [inputs, setInputs] = useState({ host: '', sshPassword: '', sshPort: 22 });

  // onChange functions
  const onInputsChange = e => setInputs({ ...inputs, [e.target.name]: e.target.value });

  // onClick functions
  const onSaveClick = e => e.preventDefault();

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
              <Input type='text' name='host' value={inputs.host} onChange={onInputsChange} placeholder='Host' />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Label>SSH Password</Label>
              <Input
                type='password'
                name='sshPassword'
                value={inputs.sshPassword}
                onChange={onInputsChange}
                placeholder='SSH Password'
              />
            </FormGroup>
          </Col>

          <Col md={12}>
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
            <Button onClick={onSaveClick} color='primary'>
              Save
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />

      <Accordion toggle={function noRefCheck() {}}>
        <AccordionItem>
          <AccordionHeader targetId='1'>Accordion Item 1</AccordionHeader>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId='2'>Accordion Item 2</AccordionHeader>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId='3'>Accordion Item 3</AccordionHeader>
        </AccordionItem>
      </Accordion>
    </>
  );
}

export default HomePage;
