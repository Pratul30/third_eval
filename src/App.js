import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList/EventList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<EventList />} />
      {/* <Route path='/allsongs' element={<AllSongs />} />
      <Route path='/songsbygenre' element={<SongsByGenre />} /> */}
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
