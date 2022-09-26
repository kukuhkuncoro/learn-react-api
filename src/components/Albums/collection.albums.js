import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import Loaders from '../Utilities/loaders';

const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // clean up function
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      axios({
        method: 'GET',
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    // if else next level
    // option === "+" ? setLimit((prev)=>prev + 1 : setLimit((prev)=> prev - 1))
    if (option === '+') {
      setLimit((prev) => prev + 1);
    }
    if (option === '-') {
      setLimit((prev) => prev - 1);
    }
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h3>{limit} collection</h3>
      <Carousel>
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={data.url} alt="First slide" height={450} width={600} />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>{data.thumnailUrl}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <ButtonGroup gap={3} className="mt-2">
        {limit > 1 && (
          <Button variant="secondary" size="lg" active onClick={() => handleLimit('-')}>
            -
          </Button>
        )}{' '}
        <Button variant="secondary" size="lg" active onClick={() => handleLimit('+')}>
          +
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collection;
