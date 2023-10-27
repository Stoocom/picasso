import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main.js';
import OnePost from '../pages/OnePost.js';

function App() {
  return (
    <Router base="/">
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="post/:id" element={<OnePost />} />
        </Routes>
    </Router>
        
  );
}

export default App;