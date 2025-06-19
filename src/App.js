import './App.css';
import Footer from './components/Footer.jsx/Footer';
import Navbar from './components/Navbar/Navbar';
import Page from './components/Page/Page';

function App() {
  return (
    <div className="App bg-bgColor1 ">
     <Navbar/>
     <Page/>
     <Footer/>
    </div>
  );
}

export default App;
