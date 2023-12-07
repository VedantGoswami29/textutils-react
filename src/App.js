import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './componets/Alert';
import Contact from './componets/Contact';
import About from './componets/About';
import NavBar from './componets/NavBar'
import TextForm from './componets/TextForm';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1150);
  };

  return (
    <Router>
      <>
        <NavBar />
        <Alert alert={alert} setAlert={setAlert} />
        <Routes>
          <Route path="/" element={<TextForm showAlert={showAlert}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
