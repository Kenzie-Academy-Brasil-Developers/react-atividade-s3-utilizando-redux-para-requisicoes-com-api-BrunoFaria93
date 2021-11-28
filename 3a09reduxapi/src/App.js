import './App.css';
import Search from './components/Search'
import DigimonList from './components/DigimonList'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
        <Search />
        <DigimonList />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </div>
  );
}

export default App;
