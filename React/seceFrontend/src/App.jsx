import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/FunctionalComponents/About';
import Gallery from './components/FunctionalComponents/Gallery';
import Home from './components/FunctionalComponents/Home';
import Contact from './components/FunctionalComponents/Contact';
import Navbar from './components/FunctionalComponents/Navbar';
import Signup from './components/FunctionalComponents/Signup';
import Login from './components/FunctionalComponents/Login';
import UseState from './components/FunctionalComponents/Hooks/UseState';
import UseEffect from './components/FunctionalComponents/Hooks/UseEffect';
import UseEffectAPI from './components/FunctionalComponents/Hooks/UseEffectAPI';
import UseEffectAPIimage from './components/FunctionalComponents/Hooks/UseEffectAPIimage';
import UseReducer from './components/FunctionalComponents/Hooks/UseReducer';
import UseRef from './components/FunctionalComponents/Hooks/UseRef';
import UseMemo from './components/FunctionalComponents/Hooks/UseMemo';
import UseCallback from './components/FunctionalComponents/Hooks/UseCallback';
import ReactLifecycleMethods from './components/classComponents/ReactLifecycleMethods';
import UseContext from './components/FunctionalComponents/Hooks/UseContext';
import Memo from './components/FunctionalComponents/Memoization/Memo';
import LazyLoadingWithSuspense from './components/FunctionalComponents/Memoization/LazyLoadingWithSuspense';
import UseLocalStorage from './components/FunctionalComponents/Hooks/CustomHooks/UseLocalStorage';
import SignUpMain from './components/FunctionalComponents/SignupMain';
import LoginMain from './components/FunctionalComponents/LoginMain';

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = (email, password) => {
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <BrowserRouter>
      {isLoggedIn && <Navbar />} {/* Render Navbar only if logged in */}
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/about" element={isLoggedIn ? <About /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/gallery" element={isLoggedIn ? <Gallery page="Gallery" image="SECE Logo" /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/contact" element={isLoggedIn ? <Contact /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/reactlm" element={isLoggedIn ? <ReactLifecycleMethods /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/useApi" element={isLoggedIn ? <UseEffectAPI /> : <SignUpMain onLogin={handleLogin} />} />
        {/* <Route path="/signup" element={isLoggedIn ? <Home /> : <Signup />} /> */}
        <Route path="/signup-main" element={isLoggedIn ? <Home /> : <SignUpMain />} />
        {/* <Route path="/login" element={isLoggedIn ? <Home /> : <Login onLogin={handleLogin} />} /> */}
        <Route path="/login-main" element={isLoggedIn ? <Home /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/useState" element={isLoggedIn ? <UseState /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/useEffect" element={isLoggedIn ? <UseEffect /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/useimage" element={isLoggedIn ? <UseEffectAPIimage /> : <SignUpMain onLogin={handleLogin} />} />
        <Route path="/usereducer" element={isLoggedIn ? <UseReducer /> : <LoginMain onLogin={handleLogin} />} />
        <Route path="/useref" element={isLoggedIn ? <UseRef /> : <LoginMain onLogin={handleLogin} />} />
        <Route path="/usememo" element={isLoggedIn ? <UseMemo /> : <LoginMain onLogin={handleLogin} />} />
        <Route path="/usecallback" element={isLoggedIn ? <UseCallback /> : <LoginMain onLogin={handleLogin} />} />
        <Route path="/usecontext" element={isLoggedIn ? <UseContext /> : <LoginMain onLogin={handleLogin} />} />
        <Route path="/memo" element={isLoggedIn ? <Memo /> : <Login onLogin={handleLogin} />} />
        <Route path="/lazy" element={isLoggedIn ? <LazyLoadingWithSuspense /> : <LoginMain onLogin={handleLogin} />} />
        <Route path="/usecustom" element={isLoggedIn ? <UseLocalStorage /> : <LoginMain onLogin={handleLogin} />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
