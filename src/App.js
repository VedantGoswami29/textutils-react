import './App.css';
import { useState } from "react"
import TextForm from './componets/TextForm';
import NavBar from './componets/NavBar';
import Alert from './componets/Alert';
// import About from './componets/About';

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (type, message) => {
    setAlert(
      {
        message: message,
        type: type,
      }
    );
    setTimeout(
      () => {
        setAlert(null)
      }, 1500
    );
  };

  return (
    <>
      <NavBar />
      <Alert alert={alert} setAlert={setAlert} />
      <TextForm showAlert={showAlert} />
    </>
  )
}

export default App;