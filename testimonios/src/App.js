import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1> Esto es una pagina de testimonios </h1>
        <Testimonio
          nombre='Miguel'
          pais='Singapur'
          imagen='imagen 1'
          cargo='Ingeniero de Software'
          empresa='Amazon'
          testimonio='De orígenes muy humildes, cuando cumplió 18 años fue a buscar fortuna a Colorado, donde conoció al que sería su marido,'/>
          <Testimonio
          nombre='Emma'
          pais='Suecia'
          imagen='imagen 5'
          cargo='Ingeniero de Software'
          empresa='Spotify'
          testimonio='De orígenes muy humildes, cuando cumplió 18 años fue a buscar fortuna a Colorado, donde conoció al que sería su marido,'/>
      </div>
    </div>
  );
}

export default App;
