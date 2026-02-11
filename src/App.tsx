import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './shared/Header.tsx';
import Footer from './shared/Footer.tsx';;
import NotFound from './shared/NotFound.tsx';
import Movies from './features/movies/Movies.tsx';
import Home from './features/home/Home.tsx';
import MovieDetails from './features/movies/MovieDetails.tsx';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <main>
       <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/movies" element={<Movies />} />
       <Route path="/movies/:id" element={<MovieDetails />} />
       <Route path="*" element={<NotFound />} />
       </Routes>
      </main>
      <Footer />  
    </BrowserRouter>
  )
}
export default App
