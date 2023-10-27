import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main.js';
import OnePost from '../pages/OnePost.js';
// const baseUrl = document.getElementsByTagName("base") 
// [0].getAttribute("href");

function App() {
  return (
    <Router basename={"/"}>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="post/:id" element={<OnePost />} />
        </Routes>
    </Router>
        
  );
}

export default App;