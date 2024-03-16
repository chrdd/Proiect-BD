
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddStudentForm from './students/AddStudent';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
      <Route exact path="/" element ={<Home />}> </Route>
      <Route exact path="/adauga" element ={<AddStudentForm />}> </Route>
      
      </Routes>
      </Router>
    </div>
  );
}

export default App;
