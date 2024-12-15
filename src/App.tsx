import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AlbumCreate from './pages/AlbumCreate';
import AlbumDisplay from './pages/AlubmDisplay';
import AlbumDetail from './pages/AlbumDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AlbumCreate />} />
        <Route path='/display' element={<AlbumDisplay />} />
        <Route path='/detail' element={<AlbumDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
