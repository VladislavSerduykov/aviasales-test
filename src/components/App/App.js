import './App.css'
import Main from '../Main/Main';
import logo from "../../images/Logo.svg";

function App() {
  return (
    <div className="app">
      <img src={logo} alt="Логотип" className="logo" />
      <Main/>
    </div>
  );
}

export default App;
