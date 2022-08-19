import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Home from './Home'
import Detail from './Detail'
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
          <Navbar/>

<Routes>
  <Route path="/" element = {<Home />} />
  <Route path="movie/:id" element ={ <Detail />} />
</Routes>
      

    </>
  );
}

export default App;
