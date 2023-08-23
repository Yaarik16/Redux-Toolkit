import Favorites from './favorites/Favorites';
import Header from './header/Header';
import Recipes from './recipe-item/Recipes';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section>
      <Header />
      <Routes>
        <Route path="/" element={<Recipes />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </section>
  );
}

export default App;
