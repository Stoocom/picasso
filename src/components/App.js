import { HashRouter, Routes, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import Main from '../pages/Main.js';
import OnePost from '../pages/OnePost.js';

const hist = createBrowserHistory();

function App() {
  return (
    <HashRouter history={hist}>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="post/:id" element={<OnePost />} />
        </Routes>
    </HashRouter>
        
  );
}

export default App;