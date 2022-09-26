import React from 'react';
import { Container, Card, Button, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Posting = () => {
  const [datas, setDatas] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios({
      method: 'GET',
      url: `${process.env.REACT_APP_BASEURL}/posts/?_limit=10`,
    }).then((result) => setDatas(result.data));
  });

  return (
    <React.Fragment>
      <Container>
        {datas.map((data, i) => {
          return (
            <React.Fragment>
              <Card key={i}>
                <Card.Header as="h5">Featured</Card.Header>
                <Card.Body>
                  <Card.Title>{data.title}</Card.Title>
                  <Card.Text>{data.body}</Card.Text>
                  <Button variant="primary" onClick={handleShow}>
                    Detail
                  </Button>
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose} animation={false} key={i}>
                <Modal.Header closeButton>
                  <Modal.Title>User ID: {data.userId}</Modal.Title>
                </Modal.Header>
                <Modal.Body>Data ID: {data.id}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </React.Fragment>
          );
        })}
      </Container>
    </React.Fragment>
  );
};
export default Posting;
