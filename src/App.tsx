import { Route, Routes } from 'react-router';
import Artist from './components/Artist/Artist';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:uuid" element={<Artist />} />
      </Route>
    </Routes>
  );
}

export default App;
