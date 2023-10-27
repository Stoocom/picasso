import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main.js';
import OnePost from '../pages/OnePost.js';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        if(window.location.hash.indexOf("#%") > -1 ) { 
           window.location.hash = ""; 
        }
     });

  return (
    <HashRouter>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="post/:id" element={<OnePost />} />
        </Routes>
    </HashRouter>
        
  );
}

export default App;