import { Spinner } from 'react-bootstrap';

const Loaders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="d-flex">
        <Spinner animation="border" variant="dark" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
      </div>
    </div>
  );
};

export default Loaders;
