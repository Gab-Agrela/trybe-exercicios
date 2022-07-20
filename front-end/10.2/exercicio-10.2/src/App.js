import './App.css';
import Estrutura from './Estrutura';
import pokemons from  './data'
import Pokemon from './Pokemon';
import Pokedex from './Pokedex';

function App() {
  return (
     <div> 
      <h1>Pokemons</h1>
      <div className='container'>
        <Pokedex/>
      </div>
    </div>
  );
}

export default App;
