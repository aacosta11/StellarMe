import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewUserPage from './pages/NewUserPage';
import TestnetDashPage from './pages/testnet/TestnetDashPage';
function App() {
  return (
    <div className="App">

      <Routes>
        <Route exact path="login/new" element={<NewUserPage/>}/>
        <Route exact path="login" element={<LoginPage/>}/>
        <Route exact path="preview" element={<TestnetDashPage/>}/>
        <Route exact path="home" element={<HomePage/>} />
        <Route path="/" element={<Navigate to="/home"/>} />
      </Routes>
      <Link to="/login">Login</Link>{" | "}
      <Link to="/login/new">Register</Link>{' | '}
      <Link to="/home">Home</Link>{" | "}
      <Link to="/preview">Preview</Link>
    </div>
  );
}

export default App;
