import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList/EventList';
import EventDetails from './pages/EventDetails/EventDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<EventList />} />
      <Route path='/eventdetails' element={<EventDetails />} />
      {/* <Route path='/allsongs' element={<AllSongs />} />
      <Route path='/songsbygenre' element={<SongsByGenre />} /> */}
    </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
