import './App.css';
import Mainlayouts from './components/Layouts/main.layout';
import Albums from './components/Albums/main.albums';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post/main.post';
import React from 'react';
import Navigation from './components/Layouts/navigation.layout';

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<Mainlayouts />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<h1 className="">404 NOT FOUND</h1>} />
      </Routes>
    </React.Fragment>
  );

  /*  const [getTimer, setTimer] = useState(1);
  const [getMyName, setMyName] = useState('kukuh');
  
  const inputNameRef = useRef(getMyName);

  useEffect(() => {
    setMyName(inputNameRef.current.value);
  }, [getTimer]);

  return (
    <div className="App">
      {getMyName}
      {getTimer}
      <br />
      <button onClick={() => setTimer((prev) => prev + 1)}>+</button>
      <button onClick={() => setTimer((prev) => prev - 1)}>-</button>
      <br />
      <input ref={inputNameRef} defaultValue={inputNameRef.current} />
    </div>
  );*/
};

export default App;
