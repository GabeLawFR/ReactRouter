import './App.css';
import Nav from "./components/Nav";
import MainContainer from "./components/MainContainer";
import Footer from './components/Footer';

function App() {

  return (
    <div id="container">
      <h1 className="title">Hello React Router!</h1>
      <Nav />
      <MainContainer />
      <Footer />
    </div>
  );
}

export default App
