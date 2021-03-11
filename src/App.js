import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Banner from './components/Banner/Banner';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
      <Banner></Banner>
      <Home></Home>
    </div>
  );
}

export default App;
