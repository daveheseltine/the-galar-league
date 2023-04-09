import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

// Pages:
import Home from "./pages/Home/Home.js"
import DragoniteCup from "./pages/DragoniteCup/DragoniteCup.js"
import CaterpieCup from './pages/CaterpieCup/CaterpieCup.js'
import Rules from './pages/Rules/Rules.js'

// Components:
import Header from "./components/Header/Header.js"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="/DragoniteCup" element={<DragoniteCup/>} />
        <Route path="/CaterpieCup" element={<CaterpieCup/>} />
        <Route path="/Rules" element={<Rules/>} />
      </Routes>
    </Router>
  );
}


export default App;