import axios from 'axios';
import { Button, ButtonGroup, AccordionHeader, AccordionBody, ListGroup, ListGroupItem, ModalFooter } from 'reactstrap';

function HomePage({ device, deleteDevice }) {
  // Helper functions
  const req = async command => {
    await axios({
      method: 'POST',
      url: `${process.env.REACT_APP_ORIGIN_URL}/api/connection`,
      data: {
        ...device,
        command,
      },
    });
  };

  // onClick functions
  const onDeleteClick = e => deleteDevice(device._id);
  const onTestClick = e => req('dir');
  const onSleepClick = e => req('dir');
  const onRestartClick = e => req('dir');
  const onShutdownClick = e => req('dir');

  // JSX
  return (
    <>
      <AccordionHeader targetId={device._id}>{device.host}</AccordionHeader>
      <AccordionBody accordionId={device._id}>
        <ListGroup>
          <ListGroupItem>OS: {device.os}</ListGroupItem>
          <ListGroupItem>SSH Port: {device.sshPort}</ListGroupItem>
          <ListGroupItem>{device.description}</ListGroupItem>
        </ListGroup>
        <hr />
        <Button onClick={onTestClick} color='success' size='sm'>
          Test
        </Button>{' '}
        <ButtonGroup>
          <Button onClick={onSleepClick} outline color='primary' size='sm'>
            Sleep
          </Button>
          <Button onClick={onRestartClick} outline color='primary' size='sm'>
            Restart
          </Button>
          <Button onClick={onShutdownClick} outline color='primary' size='sm'>
            Shutdown
          </Button>
        </ButtonGroup>{' '}
        <br />
        <hr />
        <Button onClick={onDeleteClick} color='danger' size='sm'>
          Delete
        </Button>
      </AccordionBody>
    </>
  );
}

export default HomePage;
