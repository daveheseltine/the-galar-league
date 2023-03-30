// Import:
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages:
import Home from './pages/Home/Home.js'
// import Caterpie_Cup from './pages/Caterpie-Cup/Caterpie-Cup.js'
// import Dragonite_Cup from './pages/Dragonite-Cup/Dragonite-Cup.js'
// import Rules from './pages/Rules/Rules.js'

// Compnents:
import Header from './components/Header/Header.js'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home/>} />
      </Routes>
    </Router>
  );
}

        // <Route path='/Dragonite_Cup' element={<Dragonite_Cup/>} />
        // <Route path='/Caterpie_Cup' element={<Caterpie_Cup/>} />    
                // <Route path='/Rules' element={<Rules/>} /> 


export default App;