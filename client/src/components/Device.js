import { Button, ButtonGroup, AccordionHeader, AccordionBody, ListGroup, ListGroupItem } from 'reactstrap';

function HomePage({ device, index }) {
  // onClick functions
  const onDeleteClick = e => e.preventDefault();

  // JSX
  return (
    <>
      <AccordionHeader targetId={index}>{device.host}</AccordionHeader>
      <AccordionBody accordionId={index}>
        <ListGroup>
          <ListGroupItem>OS: {device.os}</ListGroupItem>
          <ListGroupItem>SSH Port: {device.sshPort}</ListGroupItem>
          <ListGroupItem>{device.description}</ListGroupItem>
        </ListGroup>
        <hr />
        <Button color='primary'>Test</Button>{' '}
        <ButtonGroup>
          <Button outline color='primary'>
            Sleep
          </Button>
          <Button outline color='primary'>
            Restart
          </Button>
          <Button outline color='primary'>
            Shutdown
          </Button>
        </ButtonGroup>{' '}
        <Button onClick={onDeleteClick} color='danger'>
          Delete
        </Button>
      </AccordionBody>
    </>
  );
}

export default HomePage;
