import { Route, Routes } from 'react-router-dom';
import Header from './Header.jsx';
import Todo from './Todo.jsx';
import About from './About.jsx';
import { useState, useEffect } from 'react';
import './App.css'
import ErrorBoundary from './ErrorBoundary.jsx';


function Contact(){
  return (
    <div>
      <h1>Живу на 9му поверсі</h1>
      <p>{notDefinedVariable}</p>
      <img src="./assets/img/9.jpg" alt="" />
      </div>
  )
}
function Oops(){
  return <p className='oops'>404! Oops no page</p>
}
export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || "light"
});
//збереження теми в ls
useEffect(() => {
  document.body.classList.remove('light', 'dark');
  document.body.classList.add(theme);
  localStorage.setItem('theme', theme);
}, [theme]);
//перемикання теми
const toggleTheme = () => {
  setTheme(theme === 'light' ? 'dark' : 'light')
}
  return (
    <div>
      <Header />
      <button className="btn" onClick={toggleTheme}>Change theme</button>
      <Routes>
        <Route path="/" element={<Todo />}/>
        <Route path="/contact" 
        element={
          <ErrorBoundary>
            <Contact />
          </ErrorBoundary>
          }/>
        <Route path="/about" element={
            <About />
            }/>
        <Route path="*" element={<Oops />}/>
      </Routes>
    </div>
  );
}

