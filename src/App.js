import WelcomePage from "./pages/WelcomePage/WelcomePage";
import CounterPage from "./pages/CounterPage/CounterPage";
import CheckboxPage from "./pages/CheckboxPage/CheckboxPage";
import {useState} from 'react';
import PokemonPage from "./pages/PokemonPage/PokemonPage";

const OPTIONS = {
  WELCOME : "welcome",
  COUNTER : "counter",
  CHECKBOX : "checkbox",
  POKEMON : "pokemon",
}

const App = () => {
  const [selectedPage, setPageSelected] = useState(OPTIONS.WELCOME);
  const handleChange = (evt) => {
    setPageSelected(evt.target.value);
  }

  const getPage = () => {
    switch(selectedPage){
      case OPTIONS.WELCOME: return <WelcomePage />;
      case OPTIONS.COUNTER: return <CounterPage />;
      case OPTIONS.CHECKBOX: return <CheckboxPage />;
      case OPTIONS.POKEMON: return <PokemonPage />;
      default: return <WelcomePage />;
    }
  }
  return (
    <div>
      <select value={ selectedPage } onChange={handleChange}>
        <option value={OPTIONS.WELCOME}>Welcome</option>
        <option value={OPTIONS.COUNTER}>Counter</option>
        <option value={OPTIONS.CHECKBOX}>Checkbox</option>
        <option value={OPTIONS.POKEMON}>Pokemon</option>
      </select><br/>
      Option selected: {selectedPage}
      { getPage() }
    </div>
  );
}

export default App;
