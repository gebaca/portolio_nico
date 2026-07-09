import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Biography from './routes/Biography';
import Projects from './routes/Projects';

export default function App() {
  return (
    <BrowserRouter>
      {/* Barra de navegación */}
      <nav
        style={{
          display: 'flex',
          gap: '1rem',
          padding: '1rem',
          borderBottom: '1px solid #ccc',
        }}
      >
        <Link to='/'>Biografía</Link>
        <Link to='/proyectos'>Proyectos</Link>
      </nav>

      {/* Contenedor de las páginas */}
      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path='/' element={<Biography />} />
          <Route path='/proyectos' element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
