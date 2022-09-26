import React from 'react';
import { Container } from 'react-bootstrap';
import Posting from './posting.post';

const Post = () => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1>POST</h1>
        <Posting />
      </Container>
    </React.Fragment>
  );
};

export default Post;
